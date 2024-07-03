import "./Rodape.css";

function Rodape () {
    return (
        <footer>
            <section className="footer-titulo">
                <h4>Blog Meu Café</h4>
                <p>Seu destino para tudo sobre café - receitas, dicas e histórias.</p>
            </section>
            <section className="footer-links">
                <a href="#">Home</a>
                <a href="#">Postagem</a>
                <a href="#">Blog</a>
                <a href="#">Contato</a>
            </section>
            <section className="footer-autor">                
                <p>© 2024 Miriam Akiko Hirose | Projeto Bootcamp SoulCode React + Node | Todos os direitos reservados.</p>
            </section>
        </footer>
    );
}

export default Rodape;