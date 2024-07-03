import "./Produto.css";

function Produto(props) { 
    const contaDesconto = (props.preco - (props.desconto / 100) * props.preco).toFixed(2);

    return (
        <section className="produto">
            <h2>{props.nomeProduto}</h2>
            <img className="imagem-produto" src={props.imagemProd} alt={props.imagemDesc}/>
            <p className="valor-desconto">Desconto de {props.desconto}%</p>
            <p className="preco-original">De: R$ {props.preco}</p>
            <p className="preco-desconto">Por: R${contaDesconto}</p>
        </section>
    );
}

export default Produto;