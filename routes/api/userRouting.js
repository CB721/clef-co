const router = require("express").Router();
const controller = require("../../controllers/userController");

router
    .route("/create")
    .post(controller.createUser);
router
    .route("/:id")
    .get(controller.getUserByID)
    .put(controller.updateUser)
router
    .route("/login/:email/:password")
    .get(controller.getUserByEmail)

module.exports = router;