import React from "react";
import Navbar from "./components/navbar";
import Slider from "./components/slider";
import Cards from "./components/whatshot";
import Footer from "./components/footer";
import Contact from "./components/contact";
import Products from "./components/products";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Slider />
            <Cards />
            <video width="100%" height="auto" autoPlay muted loop>
              <source src="/driveby.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/contacts" component={Contact} />
        </Switch>
        <Switch>
          <Route exact path="/products" component={Products} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
