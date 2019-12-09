const router = require("express").Router();
const controller = require("../../controllers/userController");

router
    .route("/create")
    .post(controller.createUser);
router
    .route("/:id")
    .get(controller.getUserByID)
    .put(controller.updateUser);
router
    .route("/login/:email/:password")
    .get(controller.getUserByEmail);
router
    .route("/delete/:id/:email/:password")
    .delete(controller.deleteUser);
router
    .route("/status/:id/:token")
    .get(controller.verifyUserLoggedIn);

module.exports = router;