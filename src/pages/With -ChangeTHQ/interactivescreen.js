import React from 'react'

import { Helmet } from 'react-helmet'

import './interactivescreen.css'

const InteractivescreenCF = (props) => {
  return (
    <div className="interactivescreen-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="interactivescreen-interactivescreen">
        <div className="interactivescreen-frame1000002007">
          <div className="interactivescreen-frame1000002010">
            <span className="interactivescreen-text10">
              Brand Manager - Job Description
            </span>
            <div className="interactivescreen-frame1000002095">
              <button className="interactivescreen-wf-button1">
                <span className="interactivescreen-text11">Share</span>
                <img
                  src="/external/share061187-3l3c.svg"
                  alt="share061187"
                  className="interactivescreen-share06"
                />
              </button>
              <button className="interactivescreen-wf-button2">
                <span className="interactivescreen-text12">Create New</span>
              </button>
            </div>
          </div>
          <span className="interactivescreen-text13">
            <span>
              carrying out market research in order to keep up to date with
              customer trends, as well as trying to predict future trends
            </span>
            <br></br>
            <span>
              developing strategies and managing marketing campaigns across
              print, broadcast and online platforms to ensure that products and
              services meet customers’ expectations and to build the credibility
              of brands
            </span>
            <br></br>
            <span>
              analysing the success of marketing campaigns and creating reports
            </span>
            <br></br>
            <span>
              supervising advertising, product design and other forms of
              marketing to maintain consistency in branding
            </span>
            <br></br>
            <span>
              meeting with clients and working with colleagues across multiple
              departments (such as marketing assistants, marketing managers and
              chief marketing officers)
            </span>
            <br></br>
            <span>managing budgets and a team of junior assistants</span>
            <br></br>
            <span>
              organising events such as product launches, exhibitions and photo
              shoots.
            </span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default InteractivescreenCF;
