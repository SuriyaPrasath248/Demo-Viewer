import React from 'react'

import { Helmet } from 'react-helmet'

import './loginT1.css'

const LoginCB = (props) => {
  return (
    <div className="login-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="login-login">
        <div className="login-frame1000002043">
          <div className="login-frame1000002098">
            <span className="login-text1">Prodigy PB</span>
            <div className="login-frame1000002096">
              <img
                src="/external/ellipse11100-36kc-200h.png"
                alt="Ellipse11100"
                className="login-ellipse1"
              />
              <img
                src="/external/projectbrainslogotrans11101-bbd-200h.png"
                alt="ProjectBrainsLogoTrans11101"
                className="login-project-brains-logo-trans1"
              />
            </div>
          </div>
          <div className="login-frame1000002066">
            <div className="login-frame1000001976">
              <span className="login-text2">Password</span>
              <div className="login-frame279523">
                <span className="login-text3">Enter your password</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginCB;
