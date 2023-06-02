import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./components/Landingpage";
import PostView from "./components/PostView";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/postview" element={<PostView />} />
      </Routes>
    </Router>
  );
};

export default App;
