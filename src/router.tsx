import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
// import HomePage from './routes/HomePage';
import Portal from './routes/Portal';
import Counter from './components/counter/counter';
import A from './components/demo/a';
import B from './components/demo/b';
import NotFound from './routes/NotFound';

export default function ({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path='/' exact render={() =>
          <Redirect to="/portal"></Redirect>
        }></Route>
        <Route path='/portal' component={Portal}></Route>
        <Route path='/counter' component={Counter}></Route>
        <Route path='/a' component={A}></Route>
        <Route path='/b' component={B}></Route>
        <Route component={NotFound}></Route>
      </Switch>
    </Router>
  )
}