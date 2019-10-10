const orm = require("../connection/orm");

const product = {
    all: function(cb) {
        orm.findAll(function(res) {
            cb(res);
        });
      },
}

module.exports = product;