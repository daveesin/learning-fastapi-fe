import { Link } from "react-router-dom";

function Header() {

    return(
        <header className="header bg-pizzaria-border text-pizzaria-text p-4 flex justify-between items-center h-24 px-10 py-8 shadow">
            <Link to="/">
                <div className="logo text-2xl font-bold">
                    <span>🍕</span>
                    <span className="text-pizzaria-accent">Pizzaria</span> <span className="text-pizzaria-text">App</span>
                </div>
            </Link>
            
            {/* Lista de navegação */}
            <nav className="nav">
                <ul className="flex space-x-4">
                    <li><Link to="/" className="font-semibold hover:text-pizzaria-accent">Home</Link></li>
                    <li><Link to="/menu" className="font-semibold hover:text-pizzaria-accent">Menu</Link></li>
                    <li><Link to="/about" className="font-semibold hover:text-pizzaria-accent">About</Link></li>
                </ul>
            </nav>

        </header>
    )

}

export default Header;