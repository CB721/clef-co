import products from './products';
import user from './user';
import isLogged from './isLogged';
import cart from './cart';
import { combineReducers } from 'redux';

const rootReducers = combineReducers({
    products,
    user,
    isLogged,
    cart
})

export default rootReducers;