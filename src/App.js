import React from 'react';
import './App.css';
import Navbar from "./Navbar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./pages/Home"
import Product from "./pages/Product"
import Service from "./pages/Service"
function App() {
  return (
    <>
    <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Product" component={Product} />
          <Route exact path="/Service" component={Service} />
        </Switch>
    </Router>
    </>
  );
}

export default App;
