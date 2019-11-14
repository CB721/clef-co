const db = require("../connection/connection");
const moment = require("moment");

const cartTable = "oxn711nfcpjgwcr2.cart";
const cartItemsTable = "oxn711nfcpjgwcr2.cartItems";
const ordersTable = "oxn711nfcpjgwcr2.orders";
const orderItemsTable = "oxn711nfcpjgwcr2.orderItems";
const rightNow = "'" + moment().format("YYYY-MM-DDTHH:mm:ss") + "'";

module.exports = {
    createCart: function (req, res) {
        const userID = req.params.userid;
        const productID = req.params.productid;
        const quantity = req.params.quantity;
        db.query("INSERT INTO " + cartTable + " (user_id, created_at) VALUES (" + userID + ", " + rightNow + ");",
            function (err, results) {
                if (err) {
                    return res.send(err);
                } else {
                    db.query("SELECT id FROM " + cartTable + " WHERE id = LAST_INSERT_ID();",
                        function (err, results) {
                            if (err) {
                                return res.send(err);
                            } else {
                                const cartID = results[0].id;
                                db.query("INSERT INTO " + cartItemsTable + " (quantity, product_id, cart_id) VALUES (" + quantity + ", " + productID + ", " + cartID + ");",
                                    function (err, results) {
                                        if (err) {
                                            return res.send(err);
                                        } else {
                                            db.query("SELECT * FROM " + cartItemsTable + " WHERE cart_id = " + cartID + ";",
                                                function (err, results) {
                                                    if (err) {
                                                        return res.send(err);
                                                    } else {
                                                        return res.json({
                                                            results
                                                        });
                                                    }
                                                }
                                            )
                                        }
                                    }
                                )
                            }
                        }
                    )
                }
            }
        )
    },
    addItemToCart: function (req, res) {
        const cartID = req.params.cartid;
        const quantity = req.params.quantity;
        const productID = req.params.productid;
        db.query("INSERT INTO " + cartItemsTable + " (quantity, product_id, cart_id) VALUES (" + quantity + ", " + productID + ", " + cartID + ");",
            function (err, results) {
                if (err) {
                    return res.send(err);
                } else {
                    db.query("SELECT * FROM " + cartItemsTable + " WHERE cart_id = " + cartID + ";",
                        function (err, results) {
                            if (err) {
                                return res.send(err);
                            } else {
                                return res.json({
                                    results
                                });
                            }
                        }
                    )
                }
            }
        )
    },
    updateCartItem: function (req, res) {
        const cartID = req.params.cartid;
        const cartItemID = req.params.cartitemid;
        const quantity = req.params.quantity;
        db.query("UPDATE " + cartItemsTable + " SET quantity = " + quantity + " WHERE cart_id = " + cartID + " AND id = " + cartItemID + ";",
            function (err, results) {
                if (err) {
                    return res.send(err);
                } else {
                    return res.json({
                        results
                    });
                }
            }
        )
    },
    getCartByUser: function (req, res) {
        const userID = req.params.userid;
        db.query("SELECT * FROM " + cartTable + " WHERE user_id = " + userID + ";",
            function (err, results) {
                if (err) {
                    return res.send(err);
                } else {
                    if (results.length > 0) {
                        const cartArr = [];
                        for (let i = 0; i < results.length; i++) {
                            const cartID = results[i].id;
                            db.query("SELECT * FROM " + cartItemsTable + " WHERE cart_id = " + cartID + ";",
                                function (err, response) {
                                    if (err) {
                                        return res.send(err);
                                    } else {
                                        const cart = {
                                            "cart_id": cartID,
                                            "line_items": response
                                        }
                                        cartArr.push(cart);
                                    }
                                }
                            )
                        }
                        setTimeout(function () {
                            return res.json({
                                cartArr
                            });
                        }, 1000);
                    } else {
                        return res.json({
                            results: ""
                        })
                    }
                }
            }
        )
    },
    deleteCart: function (req, res) {
        const cartID = req.params.cartid;
        db.query("DELETE FROM " + cartItemsTable + " WHERE cart_id = " + cartID + ";",
            function (err, results) {
                if (err) {
                    return res.send(err);
                } else {
                    db.query("DELETE FROM " + cartTable + " WHERE id = " + cartID + ";",
                        function (err, results) {
                            if (err) {
                                return res.send(err);
                            } else {
                                return res.json({
                                    results
                                });
                            }
                        }
                    )
                }
            }
        )
    },
    completeOrder: function (req, res) {
        const cartID = req.params.cartid;
        db.query("UPDATE " + cartTable + " SET checked_out_at = " + rightNow + ", checked_out = TRUE WHERE id = " + cartID + ";",
            function (err, results) {
                if (err) {
                    return res.send(err);
                } else {
                    db.query("INSERT INTO " + ordersTable + " (user_id, created_at, checked_out_at) SELECT user_id, created_at, checked_out_at FROM " + cartTable + " WHERE id = " + cartID + ";",
                        function (err, results) {
                            if (err) {
                                return res.send(err);
                            } else {
                                db.query("SELECT id FROM " + ordersTable + " WHERE id = LAST_INSERT_ID();",
                                    function (err, results) {
                                        if (err) {
                                            return res.send(err);
                                        } else {
                                            const orderID = results[0].id;
                                            db.query("SELECT * FROM " + cartItemsTable + " WHERE cart_id = " + cartID + ";",
                                                function (err, results) {
                                                    if (err) {
                                                        return res.send(err);
                                                    } else {
                                                        const itemLen = results.length;
                                                        for (let i = 0; i < itemLen; i++) {
                                                            db.query("INSERT INTO " + orderItemsTable + "(quantity, product_id, order_id) VALUES (" + results[i].quantity + ", " + results[i].product_id + ", " + orderID + ");",
                                                                function (err, results) {
                                                                    if (err) {
                                                                        return res.send(err);
                                                                    }

                                                                }
                                                            )
                                                            if (i == itemLen - 1) {
                                                                return res.send("success");
                                                            }
                                                        }
                                                    }
                                                }
                                            )
                                        }
                                    }
                                )
                            }
                        }
                    )
                }
            }
        )

    }
}