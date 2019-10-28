import axios from "axios";

export default {
    getAllProducts: function () {
        return axios.get("/api/products");
    },
    getFilteredProducts: function (categories) {
        const categoryStr = categories.join("&");
        return axios.get("/api/search/filter/" + categoryStr);
    },
    getProductById: function (productID) {
        return axios.get("/api/products/" + productID);
    }
}