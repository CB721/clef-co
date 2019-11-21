const router = require("express").Router();
const controller = require("../../controllers/bundleController");

router
    .route("/:userid")
    .post(controller.createCart);
router
    .route("/add/:cartid")
    .put(controller.addItemToCart);

module.exports = router;