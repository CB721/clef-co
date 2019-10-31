const db = require("../connection/connection");
const moment = require("moment");

const today = moment().format("YYYY-MM-DD");
const rightNow = moment().format("YYYY-MM-DD HH:mm:ss");
const table = "oxn711nfcpjgwcr2.users";
module.exports = {
    getUserByID: function (req, res) {
        const userID = req.params.id;
        db.query("SELECT * FROM " + table + " WHERE id = " + userID + ";",
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
    getUserByEmail: function (req, res, email) {
        const userEmail = "'" + req.params.email + "'";
        const password = "'" + req.params.password + "'";
        db.query("SELECT * FROM " + table + " WHERE email = " + userEmail + " AND user_password = " + password + ";",
            function (err, results) {
                if (err) {
                    return res.send(err);
                } else {
                    if (results.length < 1) {
                        return res.send("No user found");
                    } else {
                        return res.json({
                            results
                        });
                    }
                }
            })
    },
    createUser: function (req, res) {
        const user = req.body[0];
        const queryInsert = "INSERT INTO " + table + " (first_name, last_name, user_password, email, phone, joined_date) VALUES (";
        const queryValues = "'" + user.first_name + "'," + "'" + user.last_name + "'," + "'" + user.user_password + "'," + "'" + user.email + "'," + "" + user.phone + "," + "'" + today + "');";
        db.query("SELECT * FROM " + table + "WHERE email = " + user.email + ";",
            function (err, results) {
                if (err) {
                    return res.send(err);
                } else {
                    if (results.length > 0) {
                        return res.send("Account already created with that email address");
                    } else {
                        db.query(queryInsert + queryValues,
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
            })
    },
    updateUser: function (req, res) {
        const ID = req.params.id;
        const update = req.body[0];
        let queryUpdate = "UPDATE " + table + " SET"
        for (const prop in update) {
            queryUpdate += " " + `${prop}` + " = " + "'" + `${update[prop]}` + "'" + ",";
        }
        let queryStr = queryUpdate.slice(0, -1);
        queryStr += " WHERE id = " + ID + ";";
        db.query(queryStr,
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