const router = require("express").Router();
const controller = require("../../controllers/searchController");

router
    .route("/filter/:categories")
    .get(controller.getFilteredProducts);
router
    .route("/products/:input")
    .get(controller.searchProducts);
router
    .route("/orders/:userid/:input")
    .get(controller.searchUserOrders);

module.exports = router;