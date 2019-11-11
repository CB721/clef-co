const db = require("../connection/connection");
const moment = require("moment");

const cartTable = "oxn711nfcpjgwcr2.cart";
const cartItemsTable = "oxn711nfcpjgwcr2.cartItems";
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
    }
}