import React, { Component } from "react";
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
import './App.css';


function App() {
  // state = {
  //   scrollDirection: 0,
  //   direction: "head-bar"
  // }
  // componentDidMount() {
  //   // console.log(this.products);
  //   window.addEventListener("scroll", this.scrollEvent)
  // }
  // scrollEvent = () => {
  //   if (window.location.pathname !== "/") {
  //     this.setState({
  //       direction: "head-bar"
  //     });
  //   } else {
  //     const direction = this.state.scrollDirection - window.scrollY;
  //     this.setState({
  //       scrollDirection: window.scrollY
  //     });
  //     if (direction >= 0) {
  //       this.setState({
  //         direction: "head-bar invisibility-cloak"
  //       });
  //     }
  //     if (direction < 0) {
  //       this.setState({
  //         direction: "head-bar disillusionment-charm"
  //       });
  //     }
  //   }
  // }
  const products = useSelector(state => state.products);

  return (
    <Router>
      <Navbar
      // visibility={this.state.direction}
      />
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
            exact path={`/shop/product/${product.id}`}
            component={ProductPage}
          />
        ))}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
