const router = require("express").Router();
const controller = require("../../controllers/orderController");

router
    .route("/:userid")
    .get(controller.getOrdersByUserID);

module.exports = router;