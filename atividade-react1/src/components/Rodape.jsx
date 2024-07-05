import "./Rodape.css";

function Rodape() {

    return (
        <footer>
            <div className="rodape">
                <section className="footer-logo">
                    <h2>Code+</h2>
                    <p>Code+ é uma plataforma de streaming de filmes e séries para devs. Aqui você encontra diversos títulos sobre tech.</p>
                </section>
                <section className="footer-redes">
                    <h3>Redes Sociais</h3>
                    <div>
                        <a href="#"><img src="icon-facebook.svg" alt="ícone Facebook"/></a>
                        <a href="#"><img src="icon-instagram.svg" alt="ícone Instagram"/></a>
                        <a href="#"><img src="icon-linkedin.svg" alt="ícone LinkedIn"/></a>
                    </div>
                </section>
                <section className="footer-links">
                    <ul><h3>Links Úteis</h3>
                        <li><a href="#">Contato</a></li>
                        <li><a href="#">Sobre nós</a></li>
                        <li><a href="#">FAQ</a></li>
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