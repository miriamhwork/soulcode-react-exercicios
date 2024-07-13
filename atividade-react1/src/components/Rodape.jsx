import "./Rodape.css";
import { Link } from "react-router-dom";

function Rodape() {

    return (
        <footer className="bg-dark">
            <div className="rodape">
                <section className="footer-logo">
                    <h2>Code+</h2>
                    <p>Code+ é uma plataforma de streaming de filmes e séries para devs. Aqui você encontra diversos títulos sobre tech.</p>
                </section>
                <section className="footer-redes">
                    <h4>Redes Sociais</h4>
                    <div>
                        <a href="https://www.facebook.com/" target="_blank"><img src="icon-facebook.svg" alt="ícone Facebook"/></a>
                        <a href="https://www.instagram.com/" target="_blank"><img src="icon-instagram.svg" alt="ícone Instagram"/></a>
                        <a href="https://www.linkedin.com/" target="_blank"><img src="icon-linkedin.svg" alt="ícone LinkedIn"/></a>
                    </div>
                </section>
                <section className="footer-links">
                    <ul><h4>Links Úteis</h4>
                        <Link to="/contato">Contato</Link>
                        <Link to="/sobre">Sobre Nós</Link>
                        <Link to="/faq">FAQ</Link>
                    </ul>
                </section>
            </div>
            <div className="direitos">
                <p>© 2024 Code+ | Todos os direitos reservados</p>
            </div>
        </footer>
    );
}

export default Rodape;