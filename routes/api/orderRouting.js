const router = require("express").Router();
const controller = require("../../controllers/orderController");

router
    .route("/:userid")
    .get(controller.getOrdersByUserID);
router
    .route("/analytics/checkout_out_average")
    .get(controller.getAverageCheckoutTime);

module.exports = router;