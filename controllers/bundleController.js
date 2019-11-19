const db = require("../connection/connection");
const moment = require("moment");

const cartTable = "oxn711nfcpjgwcr2.cart";
const cartItemsTable = "oxn711nfcpjgwcr2.cartItems";
const rightNow = "'" + moment().format("YYYY-MM-DDTHH:mm:ss") + "'";

module.exports = {
    createCart: function (req, res) {
        const userID = req.params.userid;
        const productIDs = req.body;
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
                                const itemLen = productIDs.length;
                                for (let i = 0; i < itemLen; i++) {
                                    db.query("INSERT INTO " + cartItemsTable + " (quantity, product_id, cart_id) VALUES (1 , " + productIDs[i] + ", " + cartID + ");",
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
    },
    addItemToCart: function (req, res) {
        const cartID = req.params.cartid;
        const productIDs = req.body;
        const itemLen = productIDs.length;
        for (let i = 0; i < itemLen; i++) {
            db.query("INSERT INTO " + cartItemsTable + " (quantity, product_id, cart_id) VALUES (1, " + productIDs[i] + ", " + cartID + ");",
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