import { Button, FloatingLabel, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

function Login() {
    const { register, handleSubmit, formState: {errors}} = useForm();

    function entrar(data) {
        console.log(data);
    }

    return (
        <main>
            <form className="form-section" onSubmit={handleSubmit(entrar)}>
                <h1>Login</h1>
                <hr />
                <FloatingLabel controlId="Email" label="Email" className="my-4" >
                    <Form.Control type="email" placeholder="name@example.com" 
                    {...register("email", {required: "O email é obrigatório"})}
                    />
                    {errors.email && <small className="invalid">{errors.email.message}</small>}
                </FloatingLabel>
                <FloatingLabel controlId="Senha" label="Password" className="mb-3">
                    <Form.Control type="password" placeholder="Password"
                    {...register("senha", {required: "A senha é obrigatória!"})}
                    />
                    {errors.senha && <small className="invalid">{errors.senha.message}</small>}
                </FloatingLabel>
                <Button variant="success" className="mt-3 w-100" type="submit">Entrar</Button>
                <Button variant="dark" className="mt-3 w-100" type="button">Entrar com Google</Button>
            </form>
        </main>
    );
}

export default Login;