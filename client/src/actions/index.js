import { Get_Products, Save_User, Logged_In, Get_Cart, Get_Orders } from './types';
import axios from 'axios';

export const getProducts = (products) => {
    return {
        type: Get_Products,
        products
    }
};
export const getAllProducts = () => {
    return (dispatch) => {
        return axios.get("/api/products")
            .then(res => {
                dispatch(getProducts(res.data.results))
            })
            .catch(err => {
                throw (err);
            })
    }
};
export const saveUser = (user) => {
    return {
        type: Save_User,
        user
    }
};
export const switchLoggedStatus = (isLogged) => {
    isLogged = !isLogged;
    return {
        type: Logged_In,
        isLogged
    }
};
export const getCart = (cart) => {
    return {
        type: Get_Cart,
        cart
    }
};
export const getCartByUser = () => {
    if (window.sessionStorage.id) {
        return (dispatch) => {
            return axios.get("/api/cart/user/" + window.sessionStorage.id)
                .then(res => {
                    dispatch(getCart(res.data.results))
                })
                .catch(err => {
                    throw (err);
                })
        }
    } else {
        return dispatch => {
            dispatch(getCart([]))
        }
    }
}
export const getOrders = (orders) => {
    return {
        type: Get_Orders,
        orders
    }
};
export const getOrdersByUser = () => {
    if (window.sessionStorage.id) {
        return (dispatch) => {
            return axios.get("/api/orders/" + window.sessionStorage.id)
                .then(res => {
                    dispatch(getOrders(res.data.ordersArr))
                })
                .catch(err => {
                    throw (err);
                })
        }
    } else {
        return dispatch => {
            dispatch(getOrders([]))
        }
    }
}
