import Blog from "./components/Blog";
import Postagem from "./components/Postagem";
import Rodape from "./components/Rodape";
import Titulo from "./components/Titulo";

function App () {
    return (
        <>
            <Titulo />
            <main>  
                <Blog />
            </main>
            <Rodape />
        </>
    );
}

export default App;