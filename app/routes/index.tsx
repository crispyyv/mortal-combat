import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ChooseHero, Fight } from "@screens";

export const GeneralSwitch = () => (
  <Router>
    <Switch>
      <Route path="/fight" component={Fight} />

      <Route path="/" component={ChooseHero} />
    </Switch>
  </Router>
);
