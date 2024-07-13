import "./Cabecalho.css";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";

function Cabecalho() {

    return (
        <header className="cabecalho">
            <Navbar bg="dark" data-bs-theme="dark" expand='xl'>
                <Container fluid>
                    <Navbar.Brand as={Link} to="/"> 
                        <h1><img
                            alt="Logo de pipoca do Code+"
                            src="/logo-code3.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        Code+</h1>
                    </Navbar.Brand>
                    <Navbar.Toggle variant="outline-light"/>
                    <Navbar.Collapse className="justify-content-end">
                        <Nav>
                        <Link to="/">Home</Link>
                        <Link to="/contato">Contato</Link>
                        <Link to="/cadastro">Cadastro</Link>
                        <Link to="/login">Login</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default Cabecalho;

