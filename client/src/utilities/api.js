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
    veriftyUserLoggedIn: function(userID, token) {
        return axios.get("/api/users/status/" + userID + "/" + token);
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
    completeCart: function(cartID, userID, items) {
        return axios.put("/api/cart/complete/" + cartID + "/" + userID + "/" + items);
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
    },
    searchAllProducts: function(input) {
        return axios.get("/api/search/products/" + input);
    },
    searchUserOrders: function(userID, input) {
        return axios.get("/api/search/orders/" + userID + "/" + input);
    },
    searchUserContactForms: function(userID, input) {
        return axios.get("/api/search/contact/" + userID + "/" + input);
    },
    addReview: function(review) {
        return axios.post("/api/reviews/new", review);
    },
    getReviewsByProductID: function (productID) {
        return axios.get("/api/reviews/product/all/" + productID);
    }, 
    getAllReviews: function() {
        return axios.get("/api/reviews/");
    },
    getAverageProductRating: function(productID) {
        return axios.get("/api/reviews/product/avg/" + productID);
    },
    addProductToViewed: function(userAndProduct) {
        return axios.post("/api/products/viewed/user", userAndProduct);
    },
    getAllViewedProductsForUser: function(userID) {
        return axios.get("/api/products/viewed/user/all/" + userID);
    },
    getUserReviews: function(userID) {
        return axios.get("/api/reviews/user/" + userID);
    },
    getAllProductsBySalesTotal: function() {
        return axios.get("/api/products/sales/grossing");
    },
    getAllProductsByQuantitySold: function() {
        return axios.get("/api/products/sales/quantity_sold");
    },
    getProductsProfit: function() {
        return axios.get("/api/products/sales/profit_margin");
    }
}