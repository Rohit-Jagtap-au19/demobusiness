import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";

import Navbar from "./components/Navbar";

import { Auth0Provider } from "@auth0/auth0-react";

import AllPrograms from "./pages/AllPrograms";
import AllInterns from "./pages/AllInterns";
import InactiveInternhips from "./pages/InactiveInternhips";
import ActiveInternships from "./pages/ActiveInternships";
import Offer from "./pages/Offer";
import Program from "./pages/Program";
import StudentProfile from "./pages/StudentProfile";



function App() {
  return (
    <BrowserRouter>
      <Auth0Provider
        domain="dev-22y4dmryuda7eps3.us.auth0.com"
        clientId="OZTvFI2v8BXtRrVwsAPSTE3xyF1QxWcL"
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        <Routes>
          <Route extact path="/" element={<LandingPage />}></Route>
          <Route extact path="dashboard" element={<Dashboard />}></Route>
          <Route extact path="allprogram" element={<AllPrograms />}></Route>
          <Route extact path="allintern" element={<AllInterns/>}></Route>
          <Route extact path="unactive" element={<InactiveInternhips/>}></Route>
          <Route extact path="active" element={<ActiveInternships/>}></Route>
          <Route extact path="offer" element={<Offer/>}></Route>
          <Route extact path="program" element={<Program/>}></Route>
          <Route extact path="student" element={<StudentProfile/>}></Route>



        </Routes>
      </Auth0Provider>
    </BrowserRouter>
  );
}

export default App;
