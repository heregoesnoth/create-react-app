import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from '../pages/home';
import UsersWithContext from '../pages/userContext';
import Cep from '../components/cep';
import User from '../pages/user';
import Quiz from '../pages/quiz';
import Loading from '../pages/loading';


export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cep" component={Cep} />
      <Route path="/user" component={User} />
      <Route path="/user-context" component={UsersWithContext} />
      <Route path="/quiz" component={Quiz} />
      <Route path="/loading" component={Loading} />
    </Switch>
  );
}
