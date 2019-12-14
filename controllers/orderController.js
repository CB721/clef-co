const db = require("../connection/connection");
const moment = require("moment");
const async = require("async");

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
                    setTimeout(function () {
                        if (ordersArr.length === results.length) {
                            return res.json({
                                ordersArr
                            });
                        } else {
                            setTimeout(function () {
                                return res.json({
                                    ordersArr
                                });
                            }, 500 * results.length)
                        }
                    }, 2000);
                }
            }
        )
    },
    getAverageCheckoutTime: function (req, res) {
        db.query("SELECT oxn711nfcpjgwcr2.orders.checked_out_at, oxn711nfcpjgwcr2.orders.created_at FROM oxn711nfcpjgwcr2.orders;",
            function (err, responses) {
                if (err) {
                    return res.send(err);
                } else {
                    let totalDiff = 0;
                    async.each(responses, function (response, callback) {
                        const checked = new Date(response.checked_out_at);
                        const created = new Date(response.created_at);
                        const difference = checked.getTime() - created.getTime();
                        totalDiff += difference;
                        return callback();
                    }, function (err) {
                        if (err) {
                            return res.send(err);
                        } else {
                            const difference = totalDiff / responses.length;
                            const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
                            const minutes = Math.floor(difference / 60000);
                            const seconds = parseFloat(((difference % 60000) / 1000).toFixed(0));
                            const results = {
                                hours,
                                minutes,
                                seconds
                            }
                            return res.json({
                                results
                            });
                        }
                    });
                }
            })
    }
}
