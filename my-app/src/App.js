import "./App.css";
import Etusivu from "./components/Etusivu";
import Varaussivu from "./components/Varaussivu";
import Kohteet from "./components/Kohteet";
import Yhteystiedot from "./components/Yhteystiedot";
import Matkakertomukset from "./components/Matkakertomukset";
import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Etusivu />} />
          <Route path="/varaus" element={<Varaussivu />} />
          <Route path="/kohteet" element={<Kohteet />} />
          <Route path="/matkakertomukset" element={<Matkakertomukset />} />
          <Route path="/yhteystiedot" element={<Yhteystiedot />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
