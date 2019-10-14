const router = require("express").Router();
const controller = require("../../controllers/searchController");

router.route("/filter/:categories").get(controller.getFilteredProducts);

module.exports = router;