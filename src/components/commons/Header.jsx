import { Link } from "react-router-dom";
import userIcon from '../../assets/circle-user.svg';
import UserDropdown from "./UserDropdown";

function Header({ usuarioLogado, nomeUsuario }) {

    const token = localStorage.getItem('access_token');

    return(
        <header className="header bg-pizzaria-border text-pizzaria-text p-4 flex justify-between items-center h-24 px-10 py-8 shadow">
            {/* Logo da aplicação */}
            <Link to="/">
                <div className="logo text-2xl font-bold">
                    <span>🍕</span>
                    <span className="text-pizzaria-accent">Pizzaria</span> <span className="text-pizzaria-text">App</span>
                </div>
            </Link>
            
            {/* Lista de navegação */}
            <nav className="nav">
                <ul className="flex space-x-15">
                    <li><Link to="/" className="font-semibold hover:text-pizzaria-accent">Home</Link></li>
                    <li><Link to="/menu" className="font-semibold hover:text-pizzaria-accent">Menu</Link></li>
                    <li><Link to="/about" className="font-semibold hover:text-pizzaria-accent">About</Link></li>
                </ul>
            </nav>

            {/* Botão de login ou menu do usuário */}
            {token ? (
                <UserDropdown nomeUsuario={nomeUsuario} />
            ) : (
                <Link to="/login" className="bg-pizzaria-accent flex justify-between text-white py-2 px-4 rounded hover:bg-pizzaria-accent-dark">
                    <img src={userIcon} alt="Login Icon" className="w-5 h-5 mr-2" />
                    <span>Login</span>
                </Link>
            )}

        </header>
    )

}

export default Header;