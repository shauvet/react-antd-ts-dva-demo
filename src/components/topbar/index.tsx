import React from 'react';
import { Link } from 'dva/router';
import './topbar.less'

const liStyle = {
  display: 'inline-block',
  margin: '10px 20px'
};

const Topbar = () => {
  return (
    <div>
      <ul>
        <li style={liStyle}><Link to="/counter">COUNTER</Link></li>
        <li style={liStyle}><Link to="/a">A</Link></li>
        <li style={liStyle}><Link to="/b">B</Link></li>
      </ul>
    </div>
  )
};

export { Topbar };