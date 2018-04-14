import React from "react";
import ReactDOM from "react-dom";
import dva from 'dva';
import count from './models/count';
import router from './router';

import 'antd-mobile/dist/antd-mobile.min.css';

const app = dva();

app.model(count);

app.router(router);
app.start('#root');