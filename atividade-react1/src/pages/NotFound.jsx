import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function NotFound() {
    return (
        <body className="notFound">
            <main className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-9 text-center">
                        <h1 className="mt-5 mb-3">Página não encontrada!</h1>
                        <img src="erro404.jpg" alt="fitas enroladas" className="img-fluid rounded" />
                        <p className="m-3">Erro 404</p>
                        <Link to="/">
                            <Button variant="danger">Retorne ao Home</Button>
                        </Link>
                    </div>
                </div>
            </main>
        </body>
    );
}

export default NotFound;
