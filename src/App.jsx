import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DaftarPage from "./pages/DaftarPage";
import LandingPage from "./pages/LandingPage";
import LayananPage from "./pages/LayananPage";
import ProgramPage from "./pages/ProgramPage";
import PromoPage from "./pages/PromoPage";
import LoginPage from "./pages/LoginPage";
import DetailProgramPage from "./pages/DetailProgramPage";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/program" element={<ProgramPage />} />
          <Route path="/promo" element={<PromoPage />} />
          <Route path="/layanan" element={<LayananPage />} />
          <Route path="/daftar" element={<DaftarPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/program/:age/:title" element={<DetailProgramPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
