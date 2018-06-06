import React from 'react';
import { Link } from 'dva/router';
import { NavBar, Icon } from 'antd-mobile';
import './topbar.less'

const liStyle = {
  display: 'inline-block',
  margin: '10px 20px'
};

const Topbar = () => {
  return (
    <NavBar
      mode="dark"
      leftContent="Back"
      rightContent={[
        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
        <Icon key="1" type="ellipsis" />,
      ]}
    >NavBar
    </NavBar>
  )
};

export { Topbar };