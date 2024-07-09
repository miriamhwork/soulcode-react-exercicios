import ConversorTemperatura from "./components/ConversorTempertura";
import Post from "./components/Post";
import "./App.css"

function App() {
    return (
        <section className="app">
          <Post />
          <ConversorTemperatura valorInicial={0}/>
        </section>
    );
}

export default App;