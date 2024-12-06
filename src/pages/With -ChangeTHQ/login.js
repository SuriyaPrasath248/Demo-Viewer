import React from 'react'

import { Helmet } from 'react-helmet'

import './login.css'

const LoginCF = (props) => {
  return (
    <div className="login-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="login-login">
        <div className="login-frame1000002099">
          <button className="login-logoandbuttons">
            <div className="login-logo">
              <div className="login-frame1000002096">
                <img
                  src="/external/projectbrainslogotrans11189-2xpx-200h.png"
                  alt="ProjectBrainsLogoTrans11189"
                  className="login-project-brains-logo-trans1"
                />
              </div>
              <span className="login-text1">Prodigy PB</span>
            </div>
            <div className="login-frame1000002097">
              <button className="login-wf-button1">
                <span className="login-text2">Sign in with Google</span>
              </button>
              <button className="login-wf-button2">
                <span className="login-text3">Sign in with Microsoft</span>
              </button>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default LoginCF;
