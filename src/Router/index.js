import { HashRouter, Route, Redirect, Switch } from "react-router-dom";
import App from "../App";
import React from "react";
import { Provider } from "react-redux";
import Store from "../Redux/store";
import Home from "@/Views/Home/home";

const router = (
  <Provider store={Store}>
    <HashRouter>
      <App>
        <Switch>
          {/* <Route from='/index' render={<Home/>}/> */}
          <Route from="/index" component={Home} exact/>
          {/* <Route psth='/index' render={()=><Home></Home>}/> */}
          {/* <Route from="/activity/:myid" component={} exact/> */}

          <Redirect from='/' to='/index' />
        </Switch>
      </App>
    </HashRouter>
  </Provider>
);

export default router;
