import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Tutorials from "./pages/Tutorials";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Search from "./pages/Search";
import Cart from "./pages/Cart";
import './App.css';


class App extends Component {
  render() {
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
              </Switch>
            <Footer />
        </Router>
    );
  }
}

export default App;
