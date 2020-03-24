import React from "react";
import {Route, Switch} from "react-router-dom";
import GrossProfitView from "../grossProfitView/GrossProfitView";
import HomepageView from "../homepageView/HomepageView";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/gross-profit/:defaultMonth?">
        <GrossProfitView />
      </Route>
      <Route path="/">
        <HomepageView />
      </Route>
    </Switch>
  );
};

export default Routes;