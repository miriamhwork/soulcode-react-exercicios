import Card from "./Card";
import { Row, Col } from 'react-bootstrap';

const filmes = [
    {cod: 1, 
        nomeFilme: "2001: Uma Odisseia no Espaço" , genero:"Ficção científica/Aventura", direcao: "Stanley Kubrick", data: 1968, duracao: "2h29", imagem:"filmes/2001_odisseia.jpg", imagemDesc:"Imagem da capa do filme 2001 uma odisseia no espaço"},
    {cod: 2, nomeFilme: "Matrix" , genero:"Ação/Ficção científica", direcao: "Lana Wachowski, Lilly Wachowski", data: 1999, duracao: "2h16", imagem:"filmes/matrix.jpg", imagemDesc:"Imagem da capa do filme Matrix 1"},
    {cod: 3, nomeFilme: "Her", genero:"Romance/Ficção científica", direcao: "Spike Jonze", data: 2013, duracao: "2h6", imagem:"filmes/her.jpg", imagemDesc:"Imagem da capa do filme Her"},
    {cod: 4, nomeFilme: "Steve Jobs", genero:"Drama/História", direcao: "Danny Boyle", data: 2015, duracao: "2h2", imagem:"filmes/steve-jobs.jpg", imagemDesc:"Imagem da capa do filme Steve Jobs"},
    {cod: 5, nomeFilme: "CodeGirl", genero:"Documentário", direcao: "Lesley Chilcott", data: 2015, duracao: "1h47", imagem:"filmes/code-girl.jpg", imagemDesc:"Imagem da capa do filme CodeGirl"},
    {cod: 6, nomeFilme: "Estrelas Além do Tempo", genero:"Drama/Ficção científica", direcao: "Theodore Melfi", data: 2016, duracao: "2h7", imagem:"filmes/estrelas-alemdotempo.jpg", imagemDesc:"Imagem da capa do filme Estrelas Além do Tempo"},
    {cod: 7, nomeFilme: "A Rede Social", genero:"Drama/Obra de Época", direcao: "David Fincher", data: 2010, duracao: "2h", imagem:"filmes/a-rede-social.jpg", imagemDesc:"Imagem da capa do filme A rede social"},
    {cod: 8, nomeFilme: "A teoria de tudo", genero:"Romance/Documentário", direcao: "James Marsh", data: 2014, duracao: "2h3", imagem:"filmes/teoria-de-tudo.jpg", imagemDesc:"Imagem da capa do filme A teoria de tudo"}        
];

function Galeria() {
    const listaFilmes = filmes.map((filme) => (
        <Col>
            <Card
                key={filme.cod}
                imagem={filme.imagem}
                imagemDesc={filme.imagemDesc}
                nome={filme.nomeFilme}
                genero={filme.genero}
                direcao={filme.direcao}
                dataLancam={filme.data}
                tempo={filme.duracao}
            />
        </Col>
    ));

    return (
        <Row>
            {listaFilmes}
        </Row>
    );
}


export default Galeria;