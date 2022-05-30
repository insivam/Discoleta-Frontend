import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";

function App(): JSX.Element {
  return (
      <Router>
      <div style={{ minHeight: '100vh' }}>
      <Routes>
      <Route path="/home" element={<Home />} />
      </Routes>
      </div>
      </Router>
  );
}

export default App;
