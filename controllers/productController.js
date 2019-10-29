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
    }
}