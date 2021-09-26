import React from "react";
import { Switch, Route } from "react-router-dom";
import Navig from "../../components/Nav";
import Footer from "../../components/Footer";
import Articles from "../Articles";
import Article from "../Article";
import Category from "../Category";

function App() {
  return (
    <div className="App">
      <Navig />
      <Switch>
        <Route path="/" component={Articles} exact />
        <Route path="/article/:id" component={Article} exact />
        <Route path="/category/:id" component={Category} exact />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;