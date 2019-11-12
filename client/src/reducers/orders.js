import { Get_Orders } from "../actions/types";

export default function cart(state = [], action) {
    switch (action.type) {
        case Get_Orders:
            return action.orders;
        default:
            return state;
    }
}