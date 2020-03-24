import React from "react";
import {Route, Switch} from "react-router-dom";
import GrossProfitView from "../grossProfitView/GrossProfitView";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/gross-profit/:defaultMonth?">
        <GrossProfitView />
      </Route>
      <Route path="/">
        homepage
      </Route>
    </Switch>
  );
};

export default Routes;