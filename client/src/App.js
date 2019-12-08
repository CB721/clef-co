import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useSelector } from 'react-redux';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Tutorials from "./pages/Tutorials";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Search from "./pages/Search";
import Cart from "./pages/Cart";
import ProductPage from "./pages/ProductPage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import User from "./pages/User";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { css } from 'glamor';
import './App.css';


function App() {
  const products = useSelector(state => state.products);

  if (!window.sessionStorage.cookie_notification) {
    toast("This website stores data such as cookies to enable important site functionality including analytics, targeting, and personalization.  Click to confirm.", {
      closeButton: false,
      draggable: false,
      closeOnClick: true,
      autoClose: false,
      className: css({
        background: '#3E0768',
        boxShadow: '2px 2px 20px 2px rgba(0,0,0,0.3)',
        borderRadius: '17px'
      }),
      bodyClassName: css({
        fontSize: '20px',
        color: 'white'
      }),
      onClick: function () { sessionStorage.setItem("cookie_notification", true) }
    });
  }


  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/tutorials" component={Tutorials} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/cart" component={Cart} />
        {products.map(product => (
          <Route
            key={product.id}
            exact path={`/shop/product/${product.id}`}
            component={ProductPage}
          />
        ))}
        <Route exact path="/login" component={Login} />
        <Route exact path="/create_account" component={SignUp} />
        <Route exact path="/user/profile" component={User} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
