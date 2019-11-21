const router = require("express").Router();
const controller = require("../../controllers/contactController");

router
    .route("/create")
    .post(controller.createForm);
// router
//     .route("/add/:cartid")
//     .get(controller.addItemToCart);

module.exports = router;