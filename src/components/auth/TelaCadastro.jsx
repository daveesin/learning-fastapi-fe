import { Link } from 'react-router-dom';

function Register() {
    return (
        <div className="min-h-[calc(100vh-6rem)] bg-pizzaria-bg flex items-center justify-center px-4 py-12">
            <div className="max-w-md w-full bg-white rounded-2xl shadow-xl border border-pizzaria-border/20 p-8 space-y-6">
                
                {/* Cabeçalho do Card */}
                <div className="text-center space-y-2">
                    <div className="inline-block bg-pizzaria-bg p-4 rounded-full border border-pizzaria-border/20 shadow-inner">
                        <span className="text-4xl">🍕</span>
                    </div>
                    <h2 className="text-3xl font-extrabold text-pizzaria-text tracking-tight">
                        Crie sua conta
                    </h2>
                    <p className="text-sm text-pizzaria-muted">
                        Cadastre-se para começar a fazer seus pedidos na Sabor & Lenha.
                    </p>
                </div>

                {/* Formulário UI (Exige nome, email e senha conforme o backend) */}
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-semibold text-pizzaria-text mb-1">
                            Nome Completo
                        </label>
                        <input
                            type="text"
                            placeholder="Seu nome"
                            className="w-full px-4 py-2.5 rounded-lg border border-pizzaria-border/40 focus:outline-none focus:ring-2 focus:ring-pizzaria-accent focus:border-transparent text-pizzaria-text transition-all duration-200"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-pizzaria-text mb-1">
                            E-mail
                        </label>
                        <input
                            type="email"
                            placeholder="seu@email.com"
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
                            className="w-full px-4 py-2.5 rounded-lg border border-pizzaria-border/40 focus:outline-none focus:ring-2 focus:ring-pizzaria-accent focus:border-transparent text-pizzaria-text transition-all duration-200"
                        />
                    </div>

                    {/* Botão */}
                    <button
                        type="submit"
                        className="w-full py-3 px-4 bg-pizzaria-accent hover:bg-pizzaria-accent-dark text-white font-bold rounded-lg shadow-md transition-all duration-200 hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer mt-2"
                    >
                        Cadastrar
                    </button>
                </form>

                {/* Rodapé do Card */}
                <div className="text-center text-sm text-pizzaria-muted border-t border-pizzaria-border/10 pt-4">
                    Já possui uma conta?{' '}
                    <Link to="/login" className="font-semibold text-pizzaria-accent hover:underline">
                        Faça login aqui
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Register;