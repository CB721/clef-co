const db = require("../connection/connection");
const moment = require("moment");
const rightNow = "'" + moment().format("YYYY-MM-DDTHH:mm:ss") + "'";

module.exports = {
    getAllProducts: function (req, res) {
        db.query("SELECT * FROM oxn711nfcpjgwcr2.products;",
            function (err, results) {
                if (err) {
                    return res.send(err);
                } else {
                    return res.json({
                        results
                    });
                }
            })
    },
    getProductById: function (req, res) {
        const productID = req.params.id;
        db.query("SELECT * FROM oxn711nfcpjgwcr2.products WHERE id = " + productID + ";",
            function (err, results) {
                if (err) {
                    return res.send(err);
                } else {
                    return res.json({
                        results
                    });
                }
            })
    },
    getTopRatedProducts: function (req, res) {
        db.query("SELECT oxn711nfcpjgwcr2.review.product_id, AVG(oxn711nfcpjgwcr2.review.rating) AS rating_average, oxn711nfcpjgwcr2.products.product_name, oxn711nfcpjgwcr2.products.product_description, oxn711nfcpjgwcr2.products.price, oxn711nfcpjgwcr2.products.quantity, oxn711nfcpjgwcr2.products.hardware, oxn711nfcpjgwcr2.products.software FROM oxn711nfcpjgwcr2.review LEFT JOIN oxn711nfcpjgwcr2.products on oxn711nfcpjgwcr2.review.product_id = oxn711nfcpjgwcr2.products.id GROUP BY oxn711nfcpjgwcr2.review.rating ORDER BY AVG(oxn711nfcpjgwcr2.review.rating) DESC LIMIT 10;",
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
    getAllProductsBySalesTotal: function (req, res) {
        db.query("SELECT oxn711nfcpjgwcr2.orderItems.quantity * oxn711nfcpjgwcr2.products.price AS product_sales_totals, oxn711nfcpjgwcr2.products.product_name, oxn711nfcpjgwcr2.orderItems.product_id AS id, oxn711nfcpjgwcr2.products.image_link, oxn711nfcpjgwcr2.products.product_description, oxn711nfcpjgwcr2.products.price, oxn711nfcpjgwcr2.products.cost, oxn711nfcpjgwcr2.products.quantity, oxn711nfcpjgwcr2.products.hardware, oxn711nfcpjgwcr2.products.software FROM oxn711nfcpjgwcr2.orderItems LEFT JOIN oxn711nfcpjgwcr2.products on oxn711nfcpjgwcr2.orderItems.product_id = oxn711nfcpjgwcr2.products.id GROUP BY oxn711nfcpjgwcr2.products.id ORDER BY oxn711nfcpjgwcr2.orderItems.quantity * oxn711nfcpjgwcr2.products.price DESC;",
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
    getAllProductsByQuantitySold: function (req, res) {
        db.query("SELECT oxn711nfcpjgwcr2.orderItems.quantity * oxn711nfcpjgwcr2.products.price AS product_sales_totals, oxn711nfcpjgwcr2.products.product_name, oxn711nfcpjgwcr2.orderItems.product_id AS id, oxn711nfcpjgwcr2.products.image_link, oxn711nfcpjgwcr2.products.product_description, oxn711nfcpjgwcr2.products.price, oxn711nfcpjgwcr2.products.cost, SUM(oxn711nfcpjgwcr2.orderItems.quantity) AS total_quantity, oxn711nfcpjgwcr2.products.hardware, oxn711nfcpjgwcr2.products.software FROM oxn711nfcpjgwcr2.orderItems LEFT JOIN oxn711nfcpjgwcr2.products on oxn711nfcpjgwcr2.orderItems.product_id = oxn711nfcpjgwcr2.products.id GROUP BY oxn711nfcpjgwcr2.products.id ORDER BY total_quantity DESC;",
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
    addToUserViewedProducts: function (req, res) {
        const userID = req.body.user_id;
        const productID = req.body.product_id;
        db.query("SELECT * FROM oxn711nfcpjgwcr2.viewedProducts WHERE oxn711nfcpjgwcr2.viewedProducts.product_id = " + productID + " AND oxn711nfcpjgwcr2.viewedProducts.user_id = " + userID + ";",
            function (err, results) {
                if (err) {
                    return res.send(err);
                } else {
                    if (results.length > 0) {
                        const viewID = results[0].id;
                        const viewTotal = results[0].views + 1;
                        db.query("UPDATE oxn711nfcpjgwcr2.viewedProducts SET views = " + viewTotal + ", viewed_on = " + rightNow + " WHERE id = " + viewID + ";",
                            function (err, results) {
                                if (err) {
                                    return res.send(err);
                                } else {
                                    if (results.affectedRows > 0) {
                                        return res.send("View count updated");
                                    }
                                }
                            }
                        )
                    } else {
                        db.query("INSERT INTO oxn711nfcpjgwcr2.viewedProducts (viewed_on, views, product_id, user_id, purchased) VALUES (" + rightNow + ", 1, " + productID + ", " + userID + ", 0);",
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
            }
        )
    },
    getAllViewedProductsByUser: function (req, res) {
        const userID = req.params.userid;
        db.query("SELECT oxn711nfcpjgwcr2.viewedProducts.id, oxn711nfcpjgwcr2.viewedProducts.viewed_on, oxn711nfcpjgwcr2.viewedProducts.views, oxn711nfcpjgwcr2.viewedProducts.product_id, oxn711nfcpjgwcr2.viewedProducts.user_id, oxn711nfcpjgwcr2.viewedProducts.purchased, oxn711nfcpjgwcr2.products.product_name, oxn711nfcpjgwcr2.products.cost, oxn711nfcpjgwcr2.products.price, oxn711nfcpjgwcr2.products.product_description, oxn711nfcpjgwcr2.products.hardware, oxn711nfcpjgwcr2.products.software, oxn711nfcpjgwcr2.products.image_link, oxn711nfcpjgwcr2.products.quantity FROM oxn711nfcpjgwcr2.viewedProducts LEFT JOIN oxn711nfcpjgwcr2.products ON oxn711nfcpjgwcr2.products.id = oxn711nfcpjgwcr2.viewedProducts.product_id WHERE oxn711nfcpjgwcr2.viewedProducts.user_id = " + userID + " ORDER BY oxn711nfcpjgwcr2.viewedProducts.viewed_on DESC;",
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
    getAllViewedProducts: function (req, res) {
        db.query("SELECT oxn711nfcpjgwcr2.viewedProducts.viewed_on AS last_view_date, oxn711nfcpjgwcr2.viewedProducts.views AS total_views, oxn711nfcpjgwcr2.viewedProducts.product_id, oxn711nfcpjgwcr2.products.product_name, oxn711nfcpjgwcr2.products.price, oxn711nfcpjgwcr2.products.cost, oxn711nfcpjgwcr2.products.image_link, oxn711nfcpjgwcr2.products.product_description, oxn711nfcpjgwcr2.products.instrument_type, oxn711nfcpjgwcr2.products.quantity, oxn711nfcpjgwcr2.products.hardware, oxn711nfcpjgwcr2.products.software FROM oxn711nfcpjgwcr2.viewedProducts LEFT JOIN oxn711nfcpjgwcr2.products ON oxn711nfcpjgwcr2.viewedProducts.product_id = oxn711nfcpjgwcr2.products.id;",
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