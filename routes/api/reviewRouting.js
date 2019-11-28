const router = require("express").Router();
const controller = require("../../controllers/reviewController");

router.route("/")
    .get(controller.getAllReviews);

// router
//     .route("/:id")
//     .get(controller.getProductById)

module.exports = router;