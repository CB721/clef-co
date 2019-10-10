const path = require("path");
const router = require("express").Router();
const productRoutes = require("./productRouting");

router.use("/products", productRoutes);
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;