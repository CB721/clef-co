const db = require("../connection/connection");

module.exports = {
    getFilteredProducts: function(req, res) {
        // expected input ["onSale", "beginneers", "keyboards"]
        // store array in const - req.params.array
        // var queryStr = "SELECT * FROM oxn711nfcpjgwcr2.products";
        // var queryFilter = "";
        // var instrumentQuery = "";
        // var bundleQuery = "";
        // var typeQuery = "";
        const categories = req.params.categories;
        console.log(categories);
        console.log(req)
        // switch statement for column/table to search
            // featured - new table, join table with products
            // instruments - "instrument_type" LIKE %{instrument}%
            // bundles - new table, join with products
            // type - if ({value} === "hardware") {
            //     "SELECT * FROM oxn711nfcpjgwcr2.products.hardware = true;"
            // } else {
            //     "SELECT * FROM oxn711nfcpjgwcr2.products.software = true;"
            // }
        // join array
        // db.query(queryStr + queryFilter + ";", function (err, results) {
        //     if (err) {
        //         return res.send(err);
        //     } else {
        //         return res.json ({
        //             results
        //         });
        //     }
        // })
    }
}