import React from "react";

import Homepage from "./pages/Homepage";
import ReviewDetails from "./pages/ReviewDetails";
import Category from "./pages/Category";
import SiteHeader from "./components/SiteHeader";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <SiteHeader />
        <Routes>
          <Route exact path="/" element={<Homepage/>} />
          <Route exact path="/ReviewDetails/:id" element={<ReviewDetails/>} />
          <Route exact path="/Category/:id" element={< Category/>} />
            
        </Routes>
      </div>
    </Router>
  );
}

export default App;
