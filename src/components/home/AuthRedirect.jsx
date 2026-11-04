import { useEffect, useState } from 'react';
import { verificarSessaoCompleta } from '../../services/auth-services';
import Home from './Home';
import Menu from './Menu';

function AuthRedirect() {

    const [statusLogin, setStatusLogin] = useState(null);

    useEffect(() => {
        async function checarSessao() {
            const estaLogado = await verificarSessaoCompleta();
            setStatusLogin(estaLogado);
        }
        checarSessao();
    }, []);

    if (statusLogin === null) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="text-center">
                    <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
                    </div>
                    <p className="mt-2 text-gray-600">Verificando sessão...</p>
                </div>
            </div>
        );
    }


    return statusLogin ? <Menu nomeUsuario={statusLogin.nome}/> : <Home />;

}

export default AuthRedirect;