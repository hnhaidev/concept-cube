import React from 'react';
import { Link } from 'react-router-dom';

const Content = () => {
  return (
    <div className="connect-content">
      <div className="connect-contact">
        <div className="inner">
          <div className="inner-wrapper">
            <h3 className="connect-name">Partnership.</h3>

            <div className="email-area connect-sub">
              <a href="mailto:loocreative@playlooc.com" title="">
                <p>loocreative@playlooc.com</p>
                <div className="mail-icon">
                  <p>✉</p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="inner">
          <h3 className="connect-name">Recruiting.</h3>
          <div className="email-area connect-sub">
            <a href="mailto:loocreative@playlooc.com" title="">
              <p>loocreative@playlooc.com</p>
              <div className="mail-icon">
                <p>✉</p>
              </div>
            </a>
          </div>
        </div>
        <div className="inner">
          <h3 className="connect-name">Learn more.</h3>
          <h4 className="connect-sub">
            <Link to={'/works'}>Learn more about us.{'>'}</Link>
          </h4>
        </div>
      </div>

      <div className="connect-area">
        <h1>
          Let's
          <br />
          Make the world
          <br />
          Together.
        </h1>
      </div>
    </div>
  );
};

export default Content;
