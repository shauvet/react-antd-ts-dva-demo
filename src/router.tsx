import * as React from 'react';
import { Router, Route } from 'dva/router';
// import HomePage from './routes/HomePage';
import Portal from './routes/Portal';
import NotFound from './routes/NotFound';

export default function ({ history }: any) {
  return (
    <Router history={history}>
      <div>
        <Route path="/" component={Portal}></Route>
        <Route path="/*" component={NotFound}></Route>
      </div>
    </Router>
  )
}