// src/components/header/UserDropdown.jsx
import { useState, useRef, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import userIcon from '../../assets/circle-user.svg';
import { logout } from '../../services/auth-services'; // Sua função de logout

function UserDropdown({ nomeUsuario }) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const navigate = useNavigate();

    // Fecha o dropdown se o usuário clicar fora dele
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleLogout = () => {
        logout();
        setIsOpen(false);
        navigate('/', { replace: true });
        window.location.reload(); // Recarrega para limpar estados e voltar pra Home pública
    };

    return (
        <div className="relative" ref={dropdownRef}>
            {/* Botão com a "fotinha" / ícone do usuário */}
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center space-x-2 focus:outline-none bg-pizzaria-accent/10 p-2 rounded-full hover:bg-pizzaria-accent/20 transition"
            >
                <img src={userIcon} alt="User Profile" className="w-8 h-8 rounded-full" />
                {nomeUsuario && (
                    <span className="text-sm font-semibold text-pizzaria-text hidden md:inline">
                        {nomeUsuario}
                    </span>
                )}
            </button>

            {/* Menuzinho Suspenso (Dropdown) */}
            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
                    <div className="px-4 py-2 text-xs text-gray-500 border-b border-gray-100">
                        Logado como <span className="font-bold">{nomeUsuario || 'Usuário'}</span>
                    </div>

                    <Link 
                        to="/perfil" 
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                        Meu Perfil
                    </Link>

                    <Link 
                        to="/pedidos" 
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                        Meus Pedidos
                    </Link>

                    <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 font-semibold border-t border-gray-100"
                    >
                        Sair (Logout)
                    </button>
                </div>
            )}
        </div>
    );
}

export default UserDropdown;