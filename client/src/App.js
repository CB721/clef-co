import React, { useEffect, useState } from "react";
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
import Logout from "./pages/Logout";
import User from "./pages/User";
import './App.css';


function App() {
  const products = useSelector(state => state.products);

  useEffect(() => {
    if (window.sessionStorage.logged_in) {
      
    } else {
      console.log("not logged in");
    }
  });

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
        <Route exact path="/user/id/logoout" component={Logout} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
