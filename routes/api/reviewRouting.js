const router = require("express").Router();
const controller = require("../../controllers/reviewController");

router.route("/")
    .get(controller.getAllReviews);
router.route("/new")
    .post(controller.addReview);
router.route("/product/:id")
    .get(controller.getAverageProductReview);
router.route("/product/all/:id")
    .get(controller.getAllReviewsByProductID);
router.route("/user/:id")
    .get(controller.getAllReviewsByUserID);


module.exports = router;