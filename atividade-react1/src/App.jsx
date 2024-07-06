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
          <Planos nome="MENSAL" valor={29.99} desconto={0}/>
          <Planos nome="ANUAL" valor={359.99} desconto={20}/>
        </section>
        <Rodape />
    </>
  );
}

export default App;
