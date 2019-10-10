const orm = require("../connection/orm");

module.exports = {
    allProducts: function (cb) {
        orm.getAll(function (data) {
            var productObject = {
                products: data
            }
            
        });
    },
    findAll: function (req, res) {
        db.find(req.query)
          .then(dbBook => res.json(dbBook))
          .catch(err => console.log(err));
      },
}