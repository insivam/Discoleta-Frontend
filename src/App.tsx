<<<<<<< HEAD
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./pages/Login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/estaticos/footer/Footer";
=======
import React from 'react';
>>>>>>> e61a7e8eecd8c0167304ff1f83ace87675d1068e

function App() {
  return (
    <Router>
      <Navbar />
<<<<<<< HEAD
      <div style={{ minHeight: "100vh" }}>
        <Routes>
          {" "}
          // Antigo Switch
=======
      <div style={{ minHeight: '100vh' }}>
        <Routes>
>>>>>>> e61a7e8eecd8c0167304ff1f83ace87675d1068e
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </Router>
<<<<<<< HEAD
  );
=======
  )
>>>>>>> e61a7e8eecd8c0167304ff1f83ace87675d1068e
}

export default App;
