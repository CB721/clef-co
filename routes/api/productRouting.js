const router = require("express").Router();
const controller = require("../../controllers/productController");

router.route("/")
    .get(controller.getAllProducts);

router
    .route("/:id")
    .get(controller.getProductById)

module.exports = router;