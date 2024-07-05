import "./Card.css";

function Card(props) {

    return (
        <article className="card-filme">
            <img src={props.imagem} alt={props.imagemDesc} />
            <h4>{props.nome}</h4>
            <p>Gênero: {props.genero}</p>
            <p>Ano de lançamento: {props.dataLancam}</p>
            <p>Duração: {props.tempo}</p>
        </article>
    );
}

export default Card;