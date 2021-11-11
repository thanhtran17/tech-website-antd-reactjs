import React from 'react';
import AppFaq from '../home/faq';
import { BackTop } from 'antd';
const AppFooter = () => {
  return (
    <div className="container-fluid">
      <div className="footer">
        <div className="logo">
          <i className="fas fa-bolt"></i>
          <a href="google.com">Tech</a>
        </div>
        <ul className="socials">
          <li>
            <a href="https://www.facebook.com/">
              <i className="fas fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/">
              <i className="fas fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/">
              <i className="fas fa-linkedin-in"></i>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/">
              <i className="fas fa-pinterest-p"></i>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/">
              <i className="fas fa-pinterest-p"></i>
            </a>
          </li>
        </ul>
        <div className="copyright">Copyright © 2020 Tech</div>
        <BackTop>
          <div className="goTop">
            <i className="fas fa-arrow-circle-up"></i>
          </div>
        </BackTop>
      </div>
    </div>
  );
};

export default AppFooter;
