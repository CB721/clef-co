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
    },
    createUser: function (user) {
        return axios.post("/api/users/create", user);
    },
    userLogin: function(email, password) {
        return axios.get("/api/users/login/:email/:password", email, password)
    }
}