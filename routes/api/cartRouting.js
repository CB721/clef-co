const router = require("express").Router();
const controller = require("../../controllers/cartController");

router
    .route("/:userid/:productid/:quantity")
    .post(controller.createCart);
router
    .route("/update/:cartid/:productid/:quantity")
    .put(controller.addItemToCart);
router
    .route("/item/update/:cartid/:cartitemid/:quantity")
    .put(controller.updateCartItem);

module.exports = router;