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
        return axios.get("/api/users/login/" + email + "/" + password);
    },
    updateUser: function (userID, userData) {
        return axios.put("/api/users/" + userID, userData);
    },
    getUser: function(userID) {
        return axios.get("/api/users/" + userID);
    },
    deleteUser: function(id, email, password) {
        return axios.delete("/api/users/delete/" + id + "/" + email + "/" + password);
    },
    getOrders: function(id) {
        return axios.get("/api/orders/" + id);
    },
    createCart: function(userID, productID, quantity) {
        return axios.post("/api/cart/" + userID + "/" + productID + "/" + quantity);
    },
    addItemToCart: function(cartID, productID, quantity) {
        return axios.put("/api/cart/update/" + cartID + "/" + productID + "/" + quantity);
    },
    getCartByUser: function(userID) {
        return axios.get("/api/cart/user/" + userID);
    },
    deleteCart: function(cartID) {
        return axios.delete("/api/cart/delete/" + cartID);
    },
    completeCart: function(cartID) {
        return axios.put("/api/cart/complete/" + cartID);
    },
    updateCartItem: function(cartID, cartItemID, quantity) {
        return axios.put("/api/cart/item/update/" + cartID + "/" + cartItemID + "/" + quantity);
    },
    deleteItemFromCart: function(cartID, cartItemID) {
        return axios.delete("/api/cart/item/delete/" + cartID + "/" + cartItemID);
    },
    createCartFromBundle: function(userID, bundleIDs) {
        return axios.post("/api/bundles/" + userID, bundleIDs);
    },
    addBundleToCart: function(cartID, bundleIDs) {
        return axios.put("/api/bundles/add/" + cartID, bundleIDs);
    },
    createContactForm: function(form) {
        return axios.post("/api/contact/create", form);
    },
    getContactFormByUser: function(userID) {
        return axios.get("/api/contact/" + userID);
    },
    getAllContactForms: function() {
        return axios.get("/api/contact/all");
    }
}