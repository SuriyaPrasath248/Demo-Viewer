import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DropdownPage from "./pages/DropdownPage";
import { LoginPage as LoginChangebF } from "./pages/With -ChangeBIO/LoginPage";
import { AuthLayout as LoginNoChangebF } from "./pages/Without -ChangeBIO/AuthLayout";
import { Chat } from "./pages/With -ChangeBIO/Chat";
import { ChatInterface} from "./pages/Without -ChangeBIO/ChatInterface1";
import IntroductionSection from "./pages/With -ChangeBIO/IntroductionSection";
import IntroductionSection1 from "./pages/Without -ChangeBIO/IntroductionLayout1";
import JobDescriptionPage from "./pages/With -ChangeBIO/JobDescriptionPage";
import JobDescriptionPage1 from "./pages/Without -ChangeBIO/JobDescriptionPage1";
import LoginForm from "./pages/With -ChangeBIO/LoginPageBackend"; // Corrected default export
import { PasswordLogin as LoginNoChangeB } from "./pages/Without -ChangeBIO/LoginBackend"; // Corrected named export
import { UserHistory } from "./pages/With -ChangeBIO/UserHistory";
import { UserHistoryB } from "./pages/Without -ChangeBIO/UserHistory";
import LoginCF from "./pages/With -ChangeTHQ/login";
import IntroductionCF from "./pages/With -ChangeTHQ/introduction";
import InteractiveCF from "./pages/With -ChangeTHQ/interactivescreen";
import GenerateScreenCF from "./pages/With -ChangeTHQ/generatescreen1";
import LoginCB from "./pages/With -ChangeTHQ/loginT1";
import Interactivescreen1CB from "./pages/With -ChangeTHQ/interactivescreen1T1";
import InteractivescreenCB from "./pages/With -ChangeTHQ/interactivescreenT1";
import OtherDetailsCB from "./pages/With -ChangeTHQ/other-detailsT1";
import ViewtranscriptCB from "./pages/With -ChangeTHQ/viewtranscriptT1";
import FinalJdCB from "./pages/With -ChangeTHQ/final-jdT1";
import LoginF from "./pages/Without -ChangeTHQ/loginT2";
import Login1F from "./pages/Without -ChangeTHQ/login1T2";
import InteractivescreenF from "./pages/Without -ChangeTHQ/interactivescreenT2";
import Interactivescreen1F from "./pages/Without -ChangeTHQ/interactivescreen1T2";
import LoginB from "./pages/Without -ChangeTHQ/login";
import Interactivescreen1B from "./pages/Without -ChangeTHQ/interactivescreen1";
import InteractivescreenB from "./pages/Without -ChangeTHQ/interactivescreen";
import ViewtranscriptB from "./pages/Without -ChangeTHQ/viewtranscript";
import OtherDetailsB from "./pages/Without -ChangeTHQ/other-details";
import FinalJdB from "./pages/Without -ChangeTHQ/final-jd";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DropdownPage />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/loginb-cf" element={<LoginChangebF />} />
        <Route path="/loginb-f" element={<LoginNoChangebF />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/chat1" element={<ChatInterface />} />
        <Route path="/introduction" element={<IntroductionSection />} />
        <Route path="/introduction1" element={<IntroductionSection1 />} />
        <Route path="/JD" element={<JobDescriptionPage />} />
        <Route path="/JD1" element={<JobDescriptionPage1 />} />
         {/* New Routes changes with Backend BIO*/}
         <Route path="/loginb-cb" element={<LoginForm />} />
         <Route path="/interactive-screenb-cb" element={<UserHistory />} />
         {/* New Routes Nochanges with Backend BIO*/}
         <Route path="/loginb-b" element={<LoginNoChangeB />} />
         <Route path="/interactive-screenb-b" element={<UserHistoryB />} />
         {/* New Routes changes with frontend THQ */}
        <Route path="/login-cf" element={<LoginCF />} />
        <Route path="/introduction-cf" element={<IntroductionCF />} />
        <Route path="/interactive-cf" element={<InteractiveCF />} />
        <Route path="/generate-cf" element={<GenerateScreenCF />} />
         {/* New Routes changes with Backend THQ */}
        <Route path="/login-cb" element={<LoginCB />} />
        <Route path="/interactive-screen1-cb" element={<Interactivescreen1CB />} />
        <Route path="/setting-cb" element={<InteractivescreenCB />} />
        <Route path="/other-details-cb" element={<OtherDetailsCB />} />
        <Route path="/view-transcript-cb" element={<ViewtranscriptCB />} />
        <Route path="/final-jd-cb" element={<FinalJdCB />} />
         {/* New Routes NOchanges with Frontend THQ */}
        <Route path="/login-f" element={<LoginF />} />
        <Route path="/introduction-f" element={<Login1F />} />
        <Route path="/interactive-f" element={<InteractivescreenF />} />
        <Route path="/generate-f" element={<Interactivescreen1F />} />
         {/* New Routes NOchanges with Backend THQ */}
         <Route path="/login-b" element={<LoginB />} />
        <Route path="/interactive-screen1-b" element={<Interactivescreen1B />} />
        <Route path="/setting-b" element={<InteractivescreenB />} />
        <Route path="/view-transcript-b" element={<ViewtranscriptB />} />
        <Route path="/other-details-b" element={<OtherDetailsB />} />
        <Route path="/final-jd-b" element={<FinalJdB />} />
      
        
      </Routes>
    </Router>
  );
};

export default App;
