import "./Plano.css";

function Planos(props) {
    const valorDesconto = props.valor - props.valor * (props.desconto/100);

    return (
        <article className="planos-desconto">
            <h4>{props.nome}</h4>
            {props.desconto > 0 && <p className="grifado">R$ {props.valor}</p>} 
            {props.desconto > 0 ? <h4>R$ {valorDesconto}</h4> : <h4>R$ {props.valor}</h4> }
            {props.desconto > 0 && <p className="desconto">{props.desconto}% OFF</p>}
        </article>
    );
}

export default Planos;