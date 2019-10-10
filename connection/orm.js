const db = require("./connection");

const orm = {
    getAll: function (cb) {
        db.query("SELECT * FROM oxn711nfcpjgwcr2.products;", function (err, result) {
            if (err) throw err;
            cb(result);
        })
    }
}

module.exports = orm;