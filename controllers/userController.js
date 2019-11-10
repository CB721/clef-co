const db = require("../connection/connection");
const moment = require("moment");
const bcrypt = require("bcryptjs");

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
    getUserByEmail: function (req, res) {
        const userEmail = "'" + req.params.email + "'";
        db.query("SELECT * FROM " + table + " WHERE email = " + userEmail + ";",
            function (err, results) {
                if (err) {
                    return res.send(err);
                } else {
                    if (results.length > 0) {
                        bcrypt.compare(req.params.password, results[0].user_password)
                            .then(
                                match => {
                                    if (match) {
                                        return res.json({
                                            results
                                        });
                                    } else {
                                        return res.send("login error");
                                    }
                                }
                            )
                    } else {
                        return res.send("login error");
                    }
                }
            })
    },
    createUser: function (req, res) {
        const user = req.body;
        let corbato = function (resistance) {
            return new Promise(function (resolve, reject) {
                resolve(
                    bcrypt.genSalt(10, (err, salt) => {
                        bcrypt.hash(resistance, salt, (err, hash) => {
                            if (err) throw err;
                            completeUser(hash);
                        });
                    })
                )
            })
        }
        if (user.first_name == undefined ||
            user.last_name == undefined ||
            user.user_password == undefined ||
            user.email == undefined) {
            return res.send("Complete all fields before continuing");
        } else {
            corbato(user.user_password)
                .then()
                .catch(err => console.log(err));
        }
        let completeUser = function (pass) {
            const queryInsert = "INSERT INTO " + table + " (first_name, last_name, user_password, email, joined_date) VALUES (";
            const queryValues = "'" + user.first_name + "'," + "'" + user.last_name + "'," + "'" + pass + "'," + "'" + user.email + "'," + "'" + today + "');";
            db.query("SELECT * FROM " + table + " WHERE email = '" + user.email + "';",
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
        }
    },
    updateUser: function (req, res) {
        const ID = req.params.id;
        const update = req.body;
        let queryUpdate = "UPDATE " + table + " SET"
        for (const prop in update) {
            if (update[prop] !== "null") {
                queryUpdate += " " + `${prop}` + " = " + "'" + `${update[prop]}` + "'" + ",";
            }
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
    },
    deleteUser: function (req, res) {
        const ID = req.params.id;
        const password = req.params.password;
        const email = req.params.email;
        console.log(ID);
        console.log(email);
        console.log(password);
        db.query("SELECT * FROM " + table + " WHERE email = '" + email + "';",
            function(err, results) {
                if (err) {
                    return res.send(err);
                } else {
                    if (results.length > 0) {
                        bcrypt.compare(password, results[0].user_password)
                            .then(
                                match => {
                                    if (match) {
                                        db.query("DELETE FROM " + table + " WHERE id = " + ID + ";",
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
                                    } else {
                                        return res.send("Incorrect password");
                                    }
                                }
                            )
                    } else {
                        return res.send("No account found");
                    }
                }
            }
        )
    }
}