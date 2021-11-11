import React from 'react';
import { Menu } from 'antd';
const AppHeader = () => {
  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo">
          <i className="fas fa-bolt"></i>
          <a href="google.com">Tech</a>
        </div>
        <Menu mode="horizontal" defaultSelectedKeys={['home']}>
          <Menu.Item key="home">home</Menu.Item>
          <Menu.Item key="about">about</Menu.Item>
          <Menu.Item key="features">features</Menu.Item>
          <Menu.Item key="howitworks">How it works</Menu.Item>
          <Menu.Item key="faq">FAQ</Menu.Item>
          <Menu.Item key="pricing">pricing</Menu.Item>
          <Menu.Item key="contact">contact</Menu.Item>
        </Menu>
      </div>
    </div>
  );
};

export default AppHeader;
