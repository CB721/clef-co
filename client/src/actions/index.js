import { Get_Products, Save_User, Logged_In } from './types';
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
}
