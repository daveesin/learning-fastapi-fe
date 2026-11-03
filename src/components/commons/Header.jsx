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


        </header>
    )

}

export default Header;