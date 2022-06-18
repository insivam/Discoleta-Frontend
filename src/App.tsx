import React from "react";
import "./App.css";
import Login from "./pages/Login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/estaticos/footer/Footer";
import Home from "./pages/home/Home";
import Sobre from "./pages/sobre/Sobre";
import Cadastro from "./pages/cadastro-usuario/CadastroUsuario";
import CadastroTema from "./components/temas/cadastroTema/CadastroTema";
import DeletarTema from "./components/temas/deletarTema/DeletarTema";
import ListaTema from "./components/temas/listaTema/ListaTema";
import { Provider } from "react-redux";
import store from "./store/store";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage";
import { Grid } from "@mui/material";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CadastroPost from "./components/postagens/cadastroPost/CadastroPost";
import DeletarPostagem from "./components/postagens/deletarPostagem/DeletarPostagem";
import Navbar from "./components/estaticos/navbar/Navbar";
import Perfil from "./pages/perfil/Perfil";

function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
      <Router>
        <Grid direction="column">
          <Grid sm={2}>
            <Navbar />
          </Grid>
          <div style={{ minHeight: "100vh" }}>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/home" element={<Home />} />
              <Route path="/perfil" element={<Perfil />} />
              <Route path="/formularioPostagem" element={<CadastroPost />} />
              <Route
                path="/formularioPostagem/:id"
                element={<CadastroPost />}
              />
              <Route
                path="/deletarPostagem/:id"
                element={<DeletarPostagem />}
              />
              <Route path="/temas" element={<ListaTema />} />
              <Route path="/formularioTema" element={<CadastroTema />} />
              <Route path="/formularioTema/:id" element={<CadastroTema />} />
              <Route path="/deletarTema/:id" element={<DeletarTema />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/*" element={<NotFoundPage />} />
            </Routes>
          </div>
        </Grid>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
