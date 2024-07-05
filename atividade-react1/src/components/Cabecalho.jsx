import "./Cabecalho.css";

function Cabecalho() {

    return (
        <header className="cabecalho">
            <section className="cabecalho-logo">
                <h1>Code+</h1>
                <img src="/logo-code3.png" alt="Logo de pipocca do Code+" />
            </section>
            <ul className="navbar">
                <li><a href="#">Home</a></li>
                <li><a href="#">Sobre</a></li>
                <li><a href="#">Ajuda</a></li>
                <li>
                    <a href="#" onClick={() => {
                    alert('Você entrou para o Code+');}}>
                    Entrar
                    </a>
                </li>
            </ul>
        </header>
    );
}

export default Cabecalho;