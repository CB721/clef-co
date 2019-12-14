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
router
    .route("/user/:userid")
    .get(controller.getCartByUser);
router
    .route("/delete/:cartid")
    .delete(controller.deleteCart);
router
    .route("/complete/:cartid/:userid/:items")
    .put(controller.completeOrder);
router
    .route("/item/delete/:cartid/:cartitemid")
    .delete(controller.deleteItemFromCart);

module.exports = router;