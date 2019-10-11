const router = require("express").Router();
const controller = require("../../controllers/productController");

router.route("/").get(controller.getAllProducts);

module.exports = router;