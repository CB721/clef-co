const db = require("../connection/connection");
const contactTable = "oxn711nfcpjgwcr2.contactForms";
const moment = require("moment");
const rightNow = "'" + moment().format("YYYY-MM-DDTHH:mm:ss") + "'";

module.exports = {
    createForm: function (req, res) {
        const email = req.body.email;
        const subject = req.body.subject;
        const description = req.body.description;
        const product = req.body.product_id;
        const user = req.body.user_id;
        db.query("INSERT INTO " + contactTable + " (user_email, user_subject, user_description, product_id, created_at, user_id) VALUES (" + "'" + email + "'," + "'" + subject + "'," + "'" + description + "'," + "'" + product + "'," + rightNow + "," + "'" + user + "');",
            function (err, results) {
                if (err) {
                    return res.send(err);
                } else {
                    if (results.affectedRows == 1) {
                        return res.send("success");
                    }
                }
            }
        )
    },
    getFormsByUserID: function(req, res) {
        const user = req.params.userid;
        db.query("SELECT * FROM " + contactTable + " WHERE user_id = " + user + ";",
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
    },
    getAll: function(req, res) {
        db.query("SELECT * FROM " + contactTable + ";",
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