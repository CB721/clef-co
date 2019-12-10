const db = require("../connection/connection");

module.exports = {
    getOrdersByUserID: function (req, res) {
        const userID = req.params.userid;
        db.query("SELECT * FROM oxn711nfcpjgwcr2.orders WHERE user_id = " + userID + " ORDER BY checked_out_at DESC;",
            function (err, results) {
                if (err) {
                    return res.send(err);
                } else {
                    const ordersArr = [];
                    let i = 0;
                    while (i < results.length) {
                        const orderID = results[i].id;
                        const created = results[i].created_at;
                        const checked = results[i].checked_out_at;
                        db.query("SELECT * FROM oxn711nfcpjgwcr2.orderItems WHERE order_id = " + orderID + ";",
                            function (err, results) {
                                if (err) {
                                    return res.send(err);
                                } else {
                                    const order = {
                                        "order_id": orderID,
                                        "created_at": created,
                                        "checked_out_at": checked,
                                        "line_items": results
                                    }
                                    ordersArr.push(order);
                                }
                            }
                            )
                            i++;
                        }
                    setTimeout(function() {
                        if (ordersArr.length === results.length) {
                            return res.json({
                                ordersArr
                            });
                        } else {
                            setTimeout(function() {
                                return res.json({
                                    ordersArr
                                });
                            }, 500 * results.length)
                        }
                    }, 2000);
                }
            }
        )
    }
}
