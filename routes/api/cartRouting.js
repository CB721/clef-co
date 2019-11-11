const router = require("express").Router();
const controller = require("../../controllers/cartController");

router
    .route("/:userid/:productid/:quantity")
    .post(controller.createCart);
router
    .route("/update/:cartid/:productid/:quantity")
    .put(controller.addItemToCart);

module.exports = router;