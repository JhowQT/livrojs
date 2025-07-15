import { Link } from "react-router-dom";

const Menusuperior = () => {
    return (
        <nav className="navbar navbar-expand-sm bg-primary navbar-dark sticky-top">
            <div className="container">
                <Link to="/" className="navbar-brand" >Controle Pessoal de Livros</Link>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Inclusão</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/lista" className="nav-link" >Manutenção</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/controle" className="nav-item" >Resumo</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
export default Menusuperior;
