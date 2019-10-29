const db = require("../connection/connection");

module.exports = {
    getUserByID: function (req, res) {
        const userID = req.params.id;
        db.query("SELECT * FROM oxn711nfcpjgwcr2.users WHERE id = " + userID + ";",
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