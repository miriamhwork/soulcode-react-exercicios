import { BrowserRouter, Route, Routes } from "react-router-dom"
import Cabecalho from "./components/Cabecalho";
import Home from "./pages/Home";
import Contato from "./pages/Contato";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Rodape from "./components/Rodape";



function App() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/contato" element={<Layout><Contato /></Layout>} />
          <Route path="/cadastro" element={<Layout><Cadastro /></Layout>} />
          <Route path="/login" element={<Layout><Login /></Layout>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


function Layout({ children }) {
  return (
    <div className="d-flex flex-column flex-grow-1">
      <Cabecalho />
      <main className="flex-grow-1">
        {children}
      </main>
      <Rodape />
    </div>
  );
}

export default App;
