import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Portfolio from "./routes/Portfolio";
import NavBar from "./components/NavBar";
import Wishlist from "./routes/Wishlist";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="container-fullwidth">
      <Router>
        <Switch>
          <Route exact path="/wishlist" component={Wishlist}></Route>
          <Route exact path="/portfolio" component={Portfolio}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
