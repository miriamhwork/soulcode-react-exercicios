import "./CardAluno.css";

function CardAluno(props) {
    return (
        <section className={`card-aluno ${props.media > 7 ? "aprovado" : "reprovado"}`}>
            <h3>{props.aluno}</h3>
            <p>{props.serie}</p>
            <p>Nota: {props.media}</p>
            <p>
                {props.media > 7 
                ? "Aprovado!" 
                : "Reprovado!"}
            </p>
        </section>
    );
}

export default CardAluno;