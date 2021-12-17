import React from "react";
import { Switch, Route } from "react-router-dom";
import Navig from "../../components/Nav";
import Footer from "../../components/Footer";
// import Articles from "../Articles";
import Article from "../Article";
import Category from "../Category";
import CV from "../Upload_CV";
import Signup from "../Signup";
import Login from "../Login";
import Dashboard from "../Dashboard";
import { ProtectedRoute } from "../Routes/protect_routes";

function App() {
  const {routes, data} = ProtectedRoute()


  return (
    <div className="App">
      <Navig data={data}/>
      <Switch>
        {
          routes.map((v, k)=> (
            <Route path={v.path} component={v.component} exact={v.exact} key={k}/>
          ))
        }

        {/* <Route path="/" component={Articles} exact /> */}
        {/* <Route path="/article/:id" component={Article} exact />
        <Route path="/category/:id" component={Category} exact />
        <Route path="/upload_cv" component={CV} exact />
        <Route path="/daftar" component={Signup} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/dashboard" component={Dashboard} exact /> */}
      </Switch>
      <Footer />
    </div>
  );
}

export default App;