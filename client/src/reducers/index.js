import products from './products';
import user from './user';
import isLogged from './isLogged';
import cart from './cart';
import orders from './orders';
import completeCart from './completeCart';
import { combineReducers } from 'redux';

const rootReducers = combineReducers({
    products,
    user,
    isLogged,
    cart,
    orders,
    completeCart
})

export default rootReducers;