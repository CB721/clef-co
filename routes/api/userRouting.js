const router = require("express").Router();
const controller = require("../../controllers/userController");

router
    .route("/create")
    .post(controller.createUser);

router
    .route("/:id")
    .get(controller.getUserByID)

module.exports = router;