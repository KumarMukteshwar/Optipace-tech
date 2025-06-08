import React from "react";
import Dashboard from "./pages/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return(
  <>
    <Dashboard />
    {/* <div className="ml-24 w-full p-4">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/report" element={<ReportPage />} />
      </Routes>
    </div> */}
  </>
  ) 
}

export default App;
