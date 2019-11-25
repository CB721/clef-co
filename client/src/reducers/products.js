import { Get_Products } from '../actions/types';

export default function products(state = [], action) {
    switch (action.type) {
        case Get_Products:
            if (action.products) {
                return action.products;
            } else {
                return state;
            }
        default:
            return state;
    }
}