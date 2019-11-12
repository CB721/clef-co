const db = require("../connection/connection");

module.exports = {
    getOrdersByUserID: function (req, res) {
        const userID = req.params.userid;
        db.query("SELECT * FROM oxn711nfcpjgwcr2.orders WHERE id = " + userID + " ORDER BY checked_out_at;",
            function (err, results) {
                if (err) {
                    return res.send(err);
                } else {
                    const resLen = results.length;
                    const ordersArr = [];
                    for (let i = 0; i < resLen; i++) {
                        const orderID = results[i].id;
                        const created = results[i].created_at;
                        const checked = results[i].checked_out_at;
                        db.query("SELECT * FROM oxn711nfcpjgwcr2.orderItems WHERE order_id = " + results[i].id + ";",
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
                        setTimeout(function() {
                            return res.json({
                                ordersArr
                            });
                        }, resLen * 100);
                    }
                }
            }
        )
    }
}