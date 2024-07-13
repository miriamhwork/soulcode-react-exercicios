import { Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";

function Contato() {
    const { register, handleSubmit, formState: {errors}} = useForm();

    function enviar(data) {
        console.log(data);
    }

    return (
        <main>
            <form className="form-section" onSubmit={handleSubmit(enviar)}>
                <h1>Contato</h1>
                <hr />
                <div className='my-4'>
                    <label htmlFor="nome">Nome:</label>
                    <input 
                    type="name" 
                    id="nome" 
                    className="form-control mt-2"
                    {...register("nome", {required: "O nome é obrigatório!", maxLength: 100})}
                    />
                    {errors.nome && <small className="invalid">{errors.nome.message}</small>}
                </div>
                <div className='my-4'>
                    <label htmlFor="email">E-mail:</label>
                    <input 
                    type="email" 
                    id="email"
                    className="form-control mt-2" 
                    {...register("email", {required: "E-mail inválido!"})}
                    />
                    {errors.email && <small className="invalid">{errors.email.message}</small>}
                </div>
                <div className='my-4'>
                    <label htmlFor="feedback">Feedback</label>
                    <textarea 
                    id="feedback" 
                    className="form-control mt-2"
                    {...register("feedback")}
                    ></textarea>
                    {errors.feedback && <small className="invalid">{errors.feedback.message}</small>}
                </div>
                <Button variant="success" className="mt-3 w-100" type="submit">Enviar</Button>
            </form>
        </main>
    );
}

export default Contato;