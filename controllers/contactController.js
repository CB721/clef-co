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
        db.query("SELECT oxn711nfcpjgwcr2.contactForms.id AS form_id, oxn711nfcpjgwcr2.contactForms.user_email, oxn711nfcpjgwcr2.contactForms.user_subject, oxn711nfcpjgwcr2.contactForms.user_description, oxn711nfcpjgwcr2.contactForms.product_id, oxn711nfcpjgwcr2.contactForms.created_at, oxn711nfcpjgwcr2.contactForms.user_id, oxn711nfcpjgwcr2.products.product_name, oxn711nfcpjgwcr2.products.hardware, oxn711nfcpjgwcr2.products.software FROM oxn711nfcpjgwcr2.contactForms LEFT JOIN oxn711nfcpjgwcr2.products ON oxn711nfcpjgwcr2.products.id = oxn711nfcpjgwcr2.contactForms.product_id WHERE oxn711nfcpjgwcr2.contactForms.user_id = " + user + ";",
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