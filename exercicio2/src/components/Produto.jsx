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


// Correção do exercício dia 04/07, não fiz as condicionais
// function CardProduto(props) {
//     const valorDesconto = props.precoUnitario - props.precoUnitario * (props.desconto/100);

//     return (
//         <article className="card-produto">
//             <p>{props.nome}</p>
            
//             {props.desconto > 0 && <p className="grifado">R$ {props.precoUnitario}</p>} 
//             {/* condicional para aparecer o valor original grifado, se tiver desconto maior que zero */}

//             {props.desconto > 0 ? <h4>R$ {valorDesconto}</h4> : <h4>R$ {props.precoUnitario}</h4> }
//             {/* ternário para aparecer o valor destacado original ou descontado, se o desconto for maior que zero */}

//             {props.desconto > 0 && <p className="desconto">{props.desconto}% OFF</p>}
//             {/* condicional para aparecer o valor do desconto em verde só se o valor do desconto for maior que zero */}

//         </article>
//     );
// }

// export default CardProduto; 

/* Quando usar o && -> quando tiver uma condição que depende de uma condição */
/* Quando usar o ? : -> quando tiver duas situações */
/* Quando quiser colocar a formatação de moeda local automaticamente -> props.precoUnitario.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}) */