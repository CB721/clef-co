const router = require("express").Router();
const controller = require("../../controllers/contactController");

router
    .route("/create")
    .post(controller.createForm);
router
    .route("/:userid")
    .get(controller.getFormsByUserID);

module.exports = router;