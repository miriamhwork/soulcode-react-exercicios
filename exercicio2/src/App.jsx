import CardAluno from "./components/CardAluno";
import Produto from "./components/Produto";

function App () {
    return (
        <>
            <section className="parte1">
                <CardAluno aluno="Miriam" série="1º ano" media="8.5"/>
                <CardAluno aluno="José" série="3º ano" media="7.0"/>
                <CardAluno aluno="Maria" série="2º ano" media="5.1"/>
                <CardAluno aluno="João" série="1º ano" media="3.7"/>
                <CardAluno aluno="Pedro" série="3º ano" media="10.0"/>
                <CardAluno aluno="Ana" série="1º ano" media="9.3"/>
                <CardAluno aluno="Carol" série="2º ano" media="6.9"/>
            </section>
            <section className="parte2">
                <Produto 
                nomeProduto="Box Harry Potter - coleção completa" 
                imagemProd="https://m.media-amazon.com/images/I/71gOCNRA9nL._AC_UL320_.jpg"
                preco={449.99} desconto={20}/>
                <Produto 
                nomeProduto="Os Heróis do Olimpo - Box" 
                imagemProd="https://m.media-amazon.com/images/I/81bOe4CsYOL._AC_UL320_.jpg"
                preco={349.50} desconto={10}/>
                 <Produto 
                nomeProduto="Box Trilogia O Senhor dos Anéis" 
                imagemProd="https://m.media-amazon.com/images/I/715afDdgKfL._AC_UL320_.jpg"
                preco={229.90} desconto={5}/>
            </section>
        </>
    );
}

export default App;