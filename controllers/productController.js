const db = require("../connection/connection");

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
        db.query("SELECT oxn711nfcpjgwcr2.orderItems.quantity * oxn711nfcpjgwcr2.products.price AS product_sales_totals, oxn711nfcpjgwcr2.products.product_name, oxn711nfcpjgwcr2.products.product_description, oxn711nfcpjgwcr2.products.price, oxn711nfcpjgwcr2.products.cost, oxn711nfcpjgwcr2.products.quantity, oxn711nfcpjgwcr2.products.hardware, oxn711nfcpjgwcr2.products.software FROM oxn711nfcpjgwcr2.orderItems LEFT JOIN oxn711nfcpjgwcr2.products on oxn711nfcpjgwcr2.orderItems.product_id = oxn711nfcpjgwcr2.products.id GROUP BY oxn711nfcpjgwcr2.products.id ORDER BY oxn711nfcpjgwcr2.orderItems.quantity * oxn711nfcpjgwcr2.products.price DESC;",
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