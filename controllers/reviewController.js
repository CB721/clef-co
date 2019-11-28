const db = require("../connection/connection");
const moment = require("moment");

const reviewTable = "oxn711nfcpjgwcr2.review";
const userTable = "oxn711nfcpjgwcr2.users";
const productTable = "oxn711nfcpjgwcr2.products";

module.exports = {
    getAllReviews: function (req, res) {
        db.query("SELECT * FROM " + reviewTable + " ORDER BY created_at DESC",
            function(err, results) {
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