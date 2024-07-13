import Banner from "../components/Banner";
import Galeria from "../components/Galeria";
import Planos from "../components/Planos";
import { Container } from 'react-bootstrap';

function App() {
  return (
    <main>
        <Banner />
        <Container className="my-3 justify-content-center" fluid="md">
          <Galeria />
        </Container>
        <section className="planos">
          <Planos nome="MENSAL" valor={29.99} desconto={0}/>
          <Planos nome="ANUAL" valor={359.99} desconto={20}/>
        </section>
    </main>
  );
}

export default App;