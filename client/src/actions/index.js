import { Get_Products } from './types';
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
}
