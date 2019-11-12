import { Get_Cart } from "../actions/types";

export default function cart(state = [], action) {
    switch (action.type) {
        case Get_Cart:
            return action.cart;
        default:
            return state;
    }
}