import React from "react";
import "./App.css";
import Login from "./pages/Login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/estaticos/footer/Footer";
import Navbar from "./components/estaticos/navbar/Navbar";
<<<<<<< HEAD
import Home from "./pages/home/Home"
import Sobre from "./pages/sobre/Sobre"

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
        </Routes>
      </div>
      <Footer />
    </Router>
=======
import Home from "./pages/home/Home";
import Sobre from "./pages/sobre/Sobre";
import Cadastro from "./pages/cadastro-usuario/CadastroUsuario";
import CadastroTema from "./components/temas/cadastroTema/CadastroTema";
import DeletarTema from "./components/temas/deletarTema/DeletarTema";
import ListaTema from "./components/temas/listaTema/ListaTema";
import { Provider } from "react-redux";
import store from "./store/store";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage";
import { Box, Grid, Stack } from "@mui/material";
import NavBar from "./components/estaticos/navbar/Navbar";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Grid direction="column">
          <Grid sm={2}>
            <NavBar />
          </Grid>
          <div style={{ minHeight: "100vh" }}>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/temas" element={<ListaTema />} />
              <Route path="/formularioTema" element={<CadastroTema />} />
              <Route path="/formularioTema/:id" element={<CadastroTema />} />
              <Route path="/deletarTema/:id" element={<DeletarTema />} />
              <Route path="/*" element={<NotFoundPage />} />
            </Routes>
          </div>
        </Grid>
        <Footer />
      </Router>
    </Provider>
>>>>>>> b0b6e2eb1ff17c45a8b9a97a0832f1793963fb30
  );
}

export default App;
