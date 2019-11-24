const db = require("../connection/connection");

const productsTable = "oxn711nfcpjgwcr2.products";
const ordersTable = "oxn711nfcpjgwcr2.orders";
const orderItemsTable = "oxn711nfcpjgwcr2.orderItems";

module.exports = {
    getFilteredProducts: function (req, res) {
        let queryStr = "SELECT * FROM oxn711nfcpjgwcr2.products";
        let queryFilter = " WHERE ";
        const queryCategories = [];
        const instrumentArr = [];
        let hardware = false;
        let software = false;

        const categories = req.params.categories;
        const cat = categories.split("&");
        function separateCats(cat) {
            for (let i = 0; i < cat.length; i++) {
                if (cat[i] === "onSale") {
                    // create discounts table
                    // boolean "onSale"
                    console.log(cat[i] + " is in featured");
                } else if (cat[i] === "bestsellers") {
                    // create orders table
                    // order by highest sales
                    console.log(cat[i] + " is in featured");
                } else if (cat[i] === "guitars") {
                    instrumentArr.push("guitar");
                    instrumentArr.push("amp");
                } else if (cat[i] === "keyboards") {
                    instrumentArr.push("keyboard");
                    instrumentArr.push("piano");
                } else if (cat[i] === "recording") {
                    instrumentArr.push("daw");
                    instrumentArr.push("virtual-instrument");
                    instrumentArr.push("utility");
                } else if (cat[i] === "microphone" || cat[i] === "bass" || cat[i] === "headphones" || cat[i] === "drums" || cat[i] === "dj") {
                    instrumentArr.push(cat[i]);
                } else if (cat[i] === "hardware") {
                    hardware = true;
                    software = false;
                } else if (cat[i] === "software") {
                    software = true;
                    hardware = false;
                } else {
                    return res.send(cat[i] + " is not a match");
                }
            }
        }
        function handleInstruments(instArr) {
            if (instArr.length > 0) {
                for (let i = 0; i < instArr.length; i++) {
                    let instrument = "instrument_type = " + "'" + instArr[i] + "'";
                    queryCategories.push(instrument);
                }
            }
        }
        function hanldeSoftware(hardware, software) {
            if (hardware) {
                queryCategories.push("hardware = true");
            }
            if (software) {
                queryCategories.push("software = true");
            }
        }
        function createFilterString(queryCategories) {
            if (queryCategories.length > 0) {
                queryFilter += queryCategories[0];
                for (let i = 1; i < queryCategories.length; i++) {
                    let orQuery = " OR " + queryCategories[i];
                    queryFilter += orQuery;
                }
            }
        }
        function searchQuery(queryStr, queryFilter) {
            db.query(queryStr + queryFilter + ";", function (err, results) {
                if (err) {
                    return res.send(err);
                } else {
                    return res.json ({
                        results
                    });
                }
            })
        }
        separateCats(cat);
        setTimeout(function() {
            handleInstruments(instrumentArr);
            hanldeSoftware(hardware, software);
        }, 200);
        setTimeout(function() {
            createFilterString(queryCategories);
        }, 300);
        setTimeout(function() {
            searchQuery(queryStr, queryFilter);
        }, 400);
    },
    searchProducts: function (req, res) {
        const search = req.params.input;
        db.query("SELECT * FROM " + productsTable + " WHERE product_name LIKE '%" + search + "%';",
            function (err, results) {
                if (err) {
                    return res.send(err);
                } else {
                    return res.json({
                        results
                    });
                }
            }
        )
    },
    searchUserOrders: function (req, res) {
        const userID = req.params.userid;
        const search = req.params.input;
        db.query("SELECT oxn711nfcpjgwcr2.orders.created_at, oxn711nfcpjgwcr2.orders.checked_out_at, oxn711nfcpjgwcr2.orders.user_id, oxn711nfcpjgwcr2.orderItems.order_id, oxn711nfcpjgwcr2.orderItems.product_id, oxn711nfcpjgwcr2.products.product_name, oxn711nfcpjgwcr2.products.price, oxn711nfcpjgwcr2.products.image_link, oxn711nfcpjgwcr2.products.product_description, oxn711nfcpjgwcr2.products.instrument_type FROM oxn711nfcpjgwcr2.orders LEFT JOIN oxn711nfcpjgwcr2.orderItems on oxn711nfcpjgwcr2.orders.id = oxn711nfcpjgwcr2.orderItems.order_id LEFT JOIN oxn711nfcpjgwcr2.products on oxn711nfcpjgwcr2.orderItems.product_id = oxn711nfcpjgwcr2.products.id WHERE oxn711nfcpjgwcr2.orders.user_id = " + userID + " AND oxn711nfcpjgwcr2.products.product_name LIKE '%" + search + "%';",
            function (err, results) {
                if (err) {
                    return res.send(err);
                } else {
                    return res.json({
                        results
                    });
                }
            }
        )
    }
}