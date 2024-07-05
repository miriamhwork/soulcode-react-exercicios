import Cabecalho from "./components/Cabecalho";
import Banner from "./components/Banner";
import Galeria from "./components/Galeria";
import Planos from "./components/Planos";
import Rodape from "./components/Rodape";

function App() {
  return (
    <>
        <Cabecalho/>
        <Banner />
        <Galeria />
        <section className="planos">
          <Planos nome="Mensal" valor={59.99} desconto={0}/>
          <Planos nome="Anual" valor={299.99} desconto={10}/>
        </section>
        <Rodape />
    </>
  );
}

export default App;
