const db = require("../connection/connection");
const moment = require("moment");

const reviewTable = "oxn711nfcpjgwcr2.review";
const userTable = "oxn711nfcpjgwcr2.users";
const productTable = "oxn711nfcpjgwcr2.products";
const rightNow = "'" + moment().format("YYYY-MM-DDTHH:mm:ss") + "'";

module.exports = {
    getAllReviews: function (req, res) {
        db.query("SELECT * FROM " + reviewTable + " ORDER BY created_at DESC",
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
    addReview: function (req, res) {
        const review = req.body;
        db.query("INSERT INTO " + reviewTable + " (review, rating, created_at, user_id, product_id) VALUES ('" + review.description + "', " + review.rating + ", " + rightNow + ", " + review.user_id + ", " + review.product_id + ");",
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
    getAverageProductReview: function (req, res) {
        const productID = req.params.id;
        db.query("SELECT oxn711nfcpjgwcr2.review.review, oxn711nfcpjgwcr2.review.created_at, oxn711nfcpjgwcr2.review.user_id, oxn711nfcpjgwcr2.users.first_name, oxn711nfcpjgwcr2.review.product_id, oxn711nfcpjgwcr2.products.product_name, oxn711nfcpjgwcr2.products.product_description, AVG(oxn711nfcpjgwcr2.review.rating) AS rating_average FROM oxn711nfcpjgwcr2.review LEFT JOIN oxn711nfcpjgwcr2.users on oxn711nfcpjgwcr2.review.user_id = oxn711nfcpjgwcr2.users.id LEFT JOIN oxn711nfcpjgwcr2.products on oxn711nfcpjgwcr2.review.product_id = oxn711nfcpjgwcr2.products.id WHERE oxn711nfcpjgwcr2.review.product_id = " + productID + ";",
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
    getAllReviewsByProductID: function (req, res) {
        const productID = req.params.id;
        db.query("SELECT oxn711nfcpjgwcr2.review.review, oxn711nfcpjgwcr2.review.rating, oxn711nfcpjgwcr2.review.created_at, oxn711nfcpjgwcr2.review.user_id, oxn711nfcpjgwcr2.users.first_name, oxn711nfcpjgwcr2.users.joined_date, oxn711nfcpjgwcr2.review.product_id, oxn711nfcpjgwcr2.products.product_name, oxn711nfcpjgwcr2.products.product_description FROM oxn711nfcpjgwcr2.review LEFT JOIN oxn711nfcpjgwcr2.users on oxn711nfcpjgwcr2.review.user_id = oxn711nfcpjgwcr2.users.id LEFT JOIN oxn711nfcpjgwcr2.products on oxn711nfcpjgwcr2.review.product_id = oxn711nfcpjgwcr2.products.id WHERE oxn711nfcpjgwcr2.review.product_id = " + productID + ";",
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
    getAllReviewsByUserID: function (req, res) {
        const userID = req.params.id;
        db.query("SELECT oxn711nfcpjgwcr2.review.review, oxn711nfcpjgwcr2.review.rating, oxn711nfcpjgwcr2.review.created_at, oxn711nfcpjgwcr2.review.user_id, oxn711nfcpjgwcr2.users.first_name, oxn711nfcpjgwcr2.review.product_id, oxn711nfcpjgwcr2.products.product_name, oxn711nfcpjgwcr2.products.product_description FROM oxn711nfcpjgwcr2.review LEFT JOIN oxn711nfcpjgwcr2.users on oxn711nfcpjgwcr2.review.user_id = oxn711nfcpjgwcr2.users.id LEFT JOIN oxn711nfcpjgwcr2.products on oxn711nfcpjgwcr2.review.product_id = oxn711nfcpjgwcr2.products.id WHERE oxn711nfcpjgwcr2.review.user_id = " + userID + ";",
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