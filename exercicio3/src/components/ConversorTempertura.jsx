import "./ConversorTemperatura.css"
import { useState } from "react";

function ConversorTemperatura() {
    const [celsius, setC] = useState(0);
    const [convertido, setConversor] = useState(0);
    const [mostraResultado, setMostraResultado] = useState(false);
    // Criei esta última const para não ficar aparecendo o resultado zerado antes do usuário digitar um valor e converter a temperatura

    function handleCelsius(e) {
        const input = e.target;
        const tempCelsius = input.value;
        setC(tempCelsius);
    }

    function handleConversor() {
        if(!celsius) {
            alert("Digite um valor para temperatura!"); 
            // Se clicar direto no botão Converter, estava considerando zero e realizando o cálculo antes do usuário digitar um valor. Por isso, esta linha bloqueia o cálculo e mostra uma mensagem de alerta
            return;
        }

        const resultado = celsius * 1.8 + 32
        setConversor(resultado);
        setMostraResultado(true);
    }

    function handleZerar() {
        setConversor(0);
        setC(0);
        setMostraResultado(false);
    }
    // Criei essa função para resetar os parâmetros


    return (
        <section className="conversor">
            <h2>Conversor de Temperatura</h2>
            <input 
                type="number"
                placeholder="Digite a temperatura em Celsius aqui"
                onChange={handleCelsius}
            />
            <div className="botoes">
                <button className="btn-convert" onClick={handleConversor}>Converter</button>
                <button className="btn-zerar" onClick={handleZerar}>Zerar</button>
            </div>
            {mostraResultado && (
            <h3>A temperatura é {parseFloat(convertido.toFixed(2))}° Fahrenheit</h3>
            )}
        </section>
    );
}

export default ConversorTemperatura;

// parseFloat é para não aparecer os zeros após a vírgula
