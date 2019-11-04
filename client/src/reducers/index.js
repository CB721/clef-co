import products from './products';
import user from './user';
import isLogged from './isLogged';
import { combineReducers } from 'redux';

const rootReducers = combineReducers({
    products,
    user,
    isLogged
})

export default rootReducers;