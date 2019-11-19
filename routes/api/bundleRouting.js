const router = require("express").Router();
const controller = require("../../controllers/bundleController");

router
    .route("/:userid")
    .post(controller.createCart);
router
    .route("/add/:userid")
    .put(controller.addItemToCart);

module.exports = router;