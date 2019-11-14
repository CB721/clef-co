import { Complete_Cart } from "../actions/types";

export default function completeCart(state = [], action) {
    switch (action.type) {
        case Complete_Cart:
            return action.cart;
        default:
            return state;
    }
}