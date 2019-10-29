const path = require("path");
const router = require("express").Router();
const productRoutes = require("./productRouting");
const searchRouting = require("./searchRouting");
const userRoutes = require("./userRouting");

router.use("/products", productRoutes);
router.use("/search", searchRouting);
router.use("/users", userRoutes);
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;