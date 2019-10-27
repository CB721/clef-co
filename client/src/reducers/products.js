import { Get_Products } from '../actions/types';

export default function products(state = [], action) {
    switch (action.type) {
        case Get_Products:
            return action.products;
        default:
            return state;
    }
}