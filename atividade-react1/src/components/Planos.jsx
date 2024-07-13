import "./Plano.css";
import { Button } from 'react-bootstrap';

function Planos(props) {
    const valorDesconto = (props.valor - props.valor * (props.desconto/100)).toFixed(2);

    return (
        <article className="planos-desconto text-center mt-5">
            <h4>Conheça o plano: </h4>
            <h2>{props.nome}</h2>
            {props.desconto > 0 ? <p className="grifado">R$ {props.valor}</p> : <p>Teste por 30 dias grátis!</p>} 
            <section className="sessao-desconto">
                {props.desconto > 0 ? <h4>R$ {valorDesconto}</h4> : <h4>R$ {props.valor}</h4> }
                {props.desconto > 0 && <p className="desconto"><strong>{props.desconto}% OFF</strong></p>}
            </section>
            <Button variant="danger" className="mt-3 w-50" type="button">Assine agora!</Button>
        </article>
    );
}

export default Planos;