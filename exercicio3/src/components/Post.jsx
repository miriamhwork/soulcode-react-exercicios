import "./Post.css"
import cafeImagem from "../assets/cafe.jpg"
import { useState } from "react";

function Post () {
    const [curtida, setCurtir] = useState(false);
    const handleCurtir = () => {
        setCurtir(!curtida)
    }


    return (
        <section className="post">
            <h2>Combinação Perfeita: Café Especial e Tradições Juninas</h2>
            <p>Seja no inverno ou no verão, o café está presente em todos os nossos dias, trazendo aconchego e energia. Que tal combinar essa paixão pelo café com as tradições juninas? </p>
            <img src={cafeImagem} alt="Imagem de uma xícara de café com um acolher ao lado com doce de leite"/>
            {curtida ? <p> Você curtiu este post!</p> : <p> Você ainda não curtiu este post!</p>}
            <button className={curtida === true ? "curtiu": "naoCurtiu"} onClick={handleCurtir}>
                {curtida ? 'Descurtir 💔': 'Curtir 💜'}
            </button> 
        </section>
    );
}

export default Post;


            