import axios from "axios";

export default {
    getAllProducts: function () {
        return axios.get("/api/products");
    },
    getFilteredProducts: function (categories) {
        const categoryStr = categories.join("&");
        return axios.get("/api/search/filter/" + categoryStr);
    }
}