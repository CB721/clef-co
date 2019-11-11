const router = require("express").Router();
const controller = require("../../controllers/cartController");

router
    .route("/:userid/:productid/:quantity")
    .post(controller.createCart);

module.exports = router;