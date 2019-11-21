const router = require("express").Router();
const controller = require("../../controllers/contactController");

router
    .route("/create")
    .post(controller.createForm);
router
    .route("/:userid")
    .get(controller.getFormsByUserID);
router
    .route("/all")
    .get(controller.getAll);

module.exports = router;