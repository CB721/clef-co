import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { getAllProducts, getCartByUser } from './actions/index';
import store from './store';

store.dispatch(getAllProducts());
if (window.sessionStorage.logged_in) {
    store.dispatch(getCartByUser());
}


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
