import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

function Cadastro() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    function cadastrar(data) {
        console.log(data);
    }

    return (
        <main>
            <form className="form-section" onSubmit={handleSubmit(cadastrar)}>
                <h1>Cadastro</h1>
                <hr />
                <div className='my-4'>
                    <label htmlFor="nome">Nome</label>
                    <input
                        type="text"
                        id="nome"
                        className="form-control"
                        {...register("nome", { required: "O nome é obrigatório!", maxLength: 100})}
                    />
                    {errors.nome && <small className="invalid">{errors.nome.message}</small>}
                </div>
                <div className='my-4'>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        className="form-control"
                        {...register("email", { required: "E-mail inválido!"})}
                    />
                    {errors.email && <small className="invalid">{errors.email.message}</small>}
                </div>
                <div className='my-4'>
                    <label htmlFor="senha">Senha</label>
                    <input
                        type="date"
                        id="dataNasc"
                        className="form-control"
                        {...register("dataNasc", { required: "Data inválida!"})}
                    />
                    {errors.dataNasc && <small className="invalid">{errors.dataNasc.message}</small>}
                </div>
                <div className='my-4'>
                    <label htmlFor="senha">Senha</label>
                    <input
                        type="password"
                        id="senha"
                        className="form-control"
                        {...register("senha", { required: "Senha inválida!", minLength: 6})}
                    />
                    {errors.senha && <small className="invalid">{errors.senha.message}</small>}
                </div>
                <Button variant="success" className="mt-3 w-100" type="submit">
                    Cadastrar
                </Button>
                <Button variant="dark" className="mt-3 w-100" type="button">
                    Entrar com o Google
                </Button>
            </form>
        </main>
    );
}

export default Cadastro;