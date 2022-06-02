import React from "react";
import "./App.css";
import Login from "./pages/Login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/estaticos/footer/Footer";
import Navbar from "./components/estaticos/navbar/Navbar";
import Home from "./pages/home/Home"
import Sobre from "./pages/sobre/Sobre"
import Cadastro from "./pages/cadastro-usuario/CadastroUsuario"

function App(): JSX.Element {
  return (
    <Router>
      <Navbar />
      <div style={{ minHeight: '100vh' }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
