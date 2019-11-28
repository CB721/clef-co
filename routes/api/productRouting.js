const router = require("express").Router();
const controller = require("../../controllers/productController");

router.route("/")
    .get(controller.getAllProducts);

router
    .route("/:id")
    .get(controller.getProductById);
router
    .route("/rating/top_ten")
    .get(controller.getTopRatedProducts);
router
    .route("/sales/grossing")
    .get(controller.getAllProductsBySalesTotal);
router
    .route("/viewed/user")
    .post(controller.addToUserViewedProducts);
router
    .route("/viewed/user/all/:userid")
    .get(controller.getAllViewedProductsByUser);
router
    .route("/viewed/all")
    .get(controller.getAllViewedProducts);

module.exports = router;