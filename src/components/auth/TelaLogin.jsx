import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { login } from '../../services/auth-services';

function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [loading, setLoading] = useState(false);


    const cleanAllFields = () => {
        setEmail('');
        setSenha('');
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await login({ email, senha });
            navigate('/');
        } catch (error) {
            console.error('Erro ao criar conta:', error);
        } finally {
            cleanAllFields();
            setLoading(false);
        }
    }


    if (loading) {
        return (
            <div className="min-h-[calc(100vh-6rem)] bg-pizzaria-bg flex items-center justify-center px-4 py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pizzaria-accent"></div>
            </div>
        );
    }

    return (
        <div className="min-h-[calc(100vh-6rem)] bg-pizzaria-bg flex items-center justify-center px-4 py-12">
            <div className="max-w-md w-full bg-white rounded-2xl shadow-xl border border-pizzaria-border/20 p-8 space-y-6">
                
                {/* Cabeçalho do Card */}
                <div className="text-center space-y-2">
                    <div className="inline-block bg-pizzaria-bg p-4 rounded-full border border-pizzaria-border/20 shadow-inner">
                        <span className="text-4xl">🍕</span>
                    </div>
                    <h2 className="text-3xl font-extrabold text-pizzaria-text tracking-tight">
                        Bem-vindo de volta!
                    </h2>
                    <p className="text-sm text-pizzaria-muted">
                        Faça login para acessar suas preferências e realizar pedidos.
                    </p>
                </div>

                {/* Formulário UI */}
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-sm font-semibold text-pizzaria-text mb-1">
                            E-mail
                        </label>
                        <input
                            type="email"
                            placeholder="seu@email.com"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2.5 rounded-lg border border-pizzaria-border/40 focus:outline-none focus:ring-2 focus:ring-pizzaria-accent focus:border-transparent text-pizzaria-text transition-all duration-200"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-pizzaria-text mb-1">
                            Senha
                        </label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            required
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            className="w-full px-4 py-2.5 rounded-lg border border-pizzaria-border/40 focus:outline-none focus:ring-2 focus:ring-pizzaria-accent focus:border-transparent text-pizzaria-text transition-all duration-200"
                        />
                    </div>

                    {/* Botão */}
                    <button
                        type="submit"
                        className="w-full py-3 px-4 bg-pizzaria-accent hover:bg-pizzaria-accent-dark text-white font-bold rounded-lg shadow-md transition-all duration-200 hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer mt-2"
                    >
                        Entrar
                    </button>
                </form>

                {/* Rodapé do Card */}
                <div className="text-center text-sm text-pizzaria-muted border-t border-pizzaria-border/10 pt-4">
                    Ainda não tem uma conta?{' '}
                    <Link to="/register" className="font-semibold text-pizzaria-accent hover:underline">
                        Cadastre-se aqui
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Login;