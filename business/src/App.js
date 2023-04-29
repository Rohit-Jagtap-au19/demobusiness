import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";

import Navbar from "./components/Navbar";

import { Auth0Provider } from "@auth0/auth0-react";

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
        </Routes>
      </Auth0Provider>
    </BrowserRouter>
  );
}

export default App;
