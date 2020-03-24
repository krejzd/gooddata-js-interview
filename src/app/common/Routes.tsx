import React from "react";
import {Switch, Route} from "react-router-dom";
import GrossProfitView from "../grossProfitView/GrossProfitView";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/gross-profit">
        <GrossProfitView />
      </Route>
      <Route path="/">
        homepage
      </Route>
    </Switch>
  );
};

export default Routes;