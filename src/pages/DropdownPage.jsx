import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./DropdownPage.css";

const DropdownPage = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const navigate = useNavigate(); // To navigate to different screens

  const toggleDropdown = (dropdownId) => {
    setOpenDropdown((prev) => (prev === dropdownId ? null : dropdownId));
  };

  const navigateToChatScreen = (section, option) => {
    if (section === "With Ani's changes builder.io" && option === "Chat Interface") {
        navigate("/chat");
    } else if (
      section === "Without Ani's changes builder.io" && option === "Chat Interface"
    ) {
        navigate("/chat1");
    }
    else if (section === "With Ani's changes TeleportHQ" &&option === "Chat Interface") {
        navigate("/generate-cf");
      }
    else if (section === "Without Ani's changes TeleportHQ" &&option === "Chat Interface") {
        navigate("/interactive-f");
      }
    // Add other navigation conditions here as needed
  };

  const navigateToJDScreen = (section, option) => {
    if (section === "With Ani's changes builder.io" && option === "Job description") {
      navigate("/JD");
    } else if (
      section === "Without Ani's changes builder.io" &&
      option === "Job description"
    ) {
      navigate("/JD1");
    }
    else if (section === "With Ani's changes TeleportHQ" &&option === "Job description") {
        navigate("/interactive-cf");
      }
      else if (section === "Without Ani's changes TeleportHQ" &&option === "Job description") {
        navigate("/generate-f");
      }  
  };
  const navigateToIntroductionScreen = (section, option) => {
    if (section === "With Ani's changes builder.io" && option === "Introduction Page") {
        navigate("/introduction");
    } 
    else if (section === "Without Ani's changes builder.io" && option === "Introduction Page") {
      navigate("/introduction1");
    }
    else if (section === "With Ani's changes TeleportHQ" && option === "Introduction Page") {
        navigate("/introduction-cf");
      }
      else if (section === "Without Ani's changes TeleportHQ" && option === "Introduction Page") {
        navigate("/introduction-f");
      }
  };

  const navigateToLoginScreen = (section, option) => {
    if (section === "With Ani's changes builder.io" && option === "Login") {
        navigate("/loginb-cf");
    } 
    else if (section === "Without Ani's changes builder.io" &&option === "Login") {
      navigate("/loginb-f");
    }
    else if (section === "With Ani's changes TeleportHQ" &&option === "Login") {
        navigate("/login-cf");
      }
      
    else if (section === "Without Ani's changes TeleportHQ" &&option === "Login") {
        navigate("/login-f");
      }
 
  };

  // Backend Functions

  const navigateToLoginScreenBackend = (section, option) => {
    if (section === "With Ani's changes builder.io" && option === "Login Backend") {
        navigate("/loginb-cb");
    } 
    else if (section === "Without Ani's changes builder.io" &&option === "Login Backend") {
      navigate("/loginb-b");
    }
    else if (section === "With Ani's changes TeleportHQ" &&option === "Login Backend") {
        navigate("/login-cb");
      }
    else if (section === "Without Ani's changes TeleportHQ" &&option === "Login Backend") {
        navigate("/login-b");
      }
  };

  const navigateToInteractiveScreenBackend = (section, option) => {
    if (section === "With Ani's changes builder.io" && option === "Interactive Screen") {
        navigate("/interactive-screenb-cb");
    } 
    else if (section === "Without Ani's changes builder.io" &&option === "Interactive Screen") {
      navigate("/interactive-screenb-b");
    }
    else if (section === "With Ani's changes TeleportHQ" &&option === "Interactive Screen") {
        navigate("/interactive-screen1-cb");
      }
    else if (section === "Without Ani's changes TeleportHQ" &&option === "Interactive Screen") {
        navigate("/interactive-screen1-b");
      }
  };


  const navigateToSettingScreenBackend = (section, option) => {
    if (section === "With Ani's changes builder.io" && option === "Settings") {
        navigate("/settingsb-cb");
    } 
    else if (section === "Without Ani's changes builder.io" &&option === "Settings") {
      navigate("/settingsb-b");
    }
    else if (section === "With Ani's changes TeleportHQ" &&option === "Settings") {
        navigate("/setting-cb");
      }
    else if (section === "Without Ani's changes TeleportHQ" &&option === "Settings") {
        navigate("/setting-b");
      }
  };

  const navigateToViewTransctiptScreenBackend = (section, option) => {
    if (section === "With Ani's changes builder.io" && option === "View Transcript") {
        navigate("/view-transcriptb-cb");
    } 
    else if (section === "Without Ani's changes builder.io" &&option === "View Transcript") {
      navigate("/view-transcriptb-b");
    }
    else if (section === "With Ani's changes TeleportHQ" &&option === "View Transcript") {
        navigate("/view-transcript-cb");
      }
    else if (section === "Without Ani's changes TeleportHQ" &&option === "View Transcript") {
        navigate("/view-transcript-b");
      }
  };
  const navigateToViewJDScreenBackend = (section, option) => {
    if (section === "With Ani's changes builder.io" && option === "Introduction Page") {
        navigate("/introduction");
    } 
    else if (section === "Without Ani's changes builder.io" &&option === "Introduction Page") {
      navigate("/introduction1");
    }
    else if (section === "With Ani's changes TeleportHQ" &&option === "ViewJD") {
        navigate("/final-jd-cb");
      }
    else if (section === "Without Ani's changes TeleportHQ" &&option === "ViewJD") {
        navigate("/final-jd-b");
      }
  };

  const navigateToOtherDetailsBackend = (section, option) => {
    if (section === "With Ani's changes builder.io" && option === "Other Details") {
        navigate("/other-detailsb-cb");
    } 
    else if (section === "Without Ani's changes builder.io" &&option === "Other Details") {
      navigate("/other-detailsb-b");
    }
    else if (section === "With Ani's changes TeleportHQ" &&option === "Other Details") {
        navigate("/other-details-cb");
      }
      else if (section === "Without Ani's changes TeleportHQ" &&option === "Other Details") {
        navigate("/other-details-b");
      }
  };




  const sections = [
    "With Ani's changes builder.io",
    "Without Ani's changes builder.io",
    "With Ani's changes TeleportHQ",
    "Without Ani's changes TeleportHQ",
  ];

  return (
    <div className="dropdown-page">
      <h1 className="page-title">Click on buttons to view your screens</h1>

      {sections.map((sectionTitle, index) => (
        <div key={index} className="dropdown-section">
          <h2 className="dropdown-section-title">{sectionTitle}</h2>
          <div className="dropdown-container">
            <div className="dropdown">
              <button
                className="dropdown-button"
                onClick={() => toggleDropdown(`frontend${index}`)}
              >
                Frontend
              </button>
              {openDropdown === `frontend${index}` && (
                <div className="dropdown-menu">
                  <button
                    className="dropdown-item" onClick={() =>{
                        console.log("Section:", sectionTitle, "Option: Login");
                        navigateToLoginScreen(sectionTitle, "Login");
                      }}>Login</button>
                  <button className="dropdown-item"onClick={() =>
                      navigateToIntroductionScreen(sectionTitle, "Introduction Page")
                    }
                  >Introduction Page</button>
                  <button
                    className="dropdown-item"
                    onClick={() =>
                      navigateToChatScreen(sectionTitle, "Chat Interface")
                    }
                  >
                    Chat Interface
                  </button>
                  <button
                    className="dropdown-item"
                    onClick={() =>
                      navigateToJDScreen(sectionTitle, "Job description")
                    }
                  >
                    Job description
                  </button>
                 {/* <button className="dropdown-item">Option 5</button>*/}
                </div>
              )}
            </div>
            <div className="dropdown">
              <button
                className="dropdown-button"
                onClick={() => toggleDropdown(`backend${index}`)}
              >
                Backend
              </button>
              {openDropdown === `backend${index}` && (
                <div className="dropdown-menu">
                <button
                  className="dropdown-item"
                  onClick={() => navigateToLoginScreenBackend(sectionTitle, "Login Backend")}
                >
                  Login Backend
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => navigateToInteractiveScreenBackend(sectionTitle, "Interactive Screen")}
                >
                  Interactive Screen
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => navigateToSettingScreenBackend(sectionTitle, "Settings")}
                >
                  Settings
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => navigateToViewJDScreenBackend(sectionTitle, "ViewJD")}
                >
                  ViewJD
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => navigateToViewTransctiptScreenBackend(sectionTitle, "View Transcript")}
                >
                  View Transcript
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => navigateToOtherDetailsBackend(sectionTitle, "Other Details")}
                >
                  Other Details
                </button>
              </div>
              
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DropdownPage;
