import React from 'react'

import { Helmet } from 'react-helmet'

import './loginT2.css'

const LoginF = (props) => {
  return (
    <div className="login-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="login-login">
        <div className="login-frame1000002099">
          <div className="login-frame1000002098">
            <span className="login-text1">Prodigy PB</span>
            <div className="login-frame1000002096">
              <img
                src="/external/ellipse11212-me8-200h.png"
                alt="Ellipse11212"
                className="login-ellipse1"
              />
              <img
                src="/external/projectbrainslogotrans11213-pi7r-200h.png"
                alt="ProjectBrainsLogoTrans11213"
                className="login-project-brains-logo-trans1"
              />
            </div>
          </div>
          <div className="login-frame1000002097">
            <button className="login-wf-button1">
              <span className="login-text2">Sign in with Google</span>
            </button>
            <button className="login-wf-button2">
              <span className="login-text3">Sign in with Microsoft</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginF;
