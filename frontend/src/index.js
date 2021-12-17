import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import App from "./containers/App";
import { Router } from "react-router-dom";
// import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { CookiesProvider } from "react-cookie";
import history from './history/history';

// const history = createBrowserHistory();


ReactDOM.render(
  <CookiesProvider>
    <Router history={history}>
        <App />
    </Router>
  </CookiesProvider>,
  document.getElementById("root")
);