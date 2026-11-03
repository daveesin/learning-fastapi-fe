import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="min-h-[calc(100vh-6rem)] bg-pizzaria-bg flex flex-col justify-between">
            
            {/* Seção Hero / Principal */}
            <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                
                {/* Texto de Apresentação */}
                <div className="space-y-6 text-center md:text-left">
                    <div className="inline-flex items-center gap-2 bg-pizzaria-accent/10 text-pizzaria-accent px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide border border-pizzaria-accent/20">
                        🔥 Forno a lenha artesanal
                    </div>
                    
                    <h1 className="text-4xl md:text-6xl font-extrabold text-pizzaria-text tracking-tight leading-tight">
                        A verdadeira pizza italiana, direto na sua casa.
                    </h1>
                    
                    <p className="text-lg text-pizzaria-muted leading-relaxed">
                        Massa fermentada por 48 horas, ingredientes frescos selecionados e assada no autêntico forno a lenha. Sinta o sabor da tradição na <span className="font-bold text-pizzaria-text">Sabor & Lenha</span>.
                    </p>

                    {/* Botões de Ação */}
                    <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4">
                        <Link
                            to="/register"
                            className="w-full sm:w-auto px-8 py-3.5 bg-pizzaria-accent hover:bg-pizzaria-accent-dark text-white font-bold rounded-xl shadow-lg transition-all duration-200 hover:shadow-xl text-center"
                        >
                            Criar Conta e Pedir 🍕
                        </Link>
                        
                        <Link
                            to="/login"
                            className="w-full sm:w-auto px-8 py-3.5 bg-white hover:bg-gray-50 text-pizzaria-text font-bold rounded-xl border border-pizzaria-border/40 shadow-sm transition-all duration-200 text-center"
                        >
                            Já tenho uma conta
                        </Link>
                    </div>
                </div>

                {/* Ilustração / Destaque Visual */}
                <div className="flex justify-center">
                    <div className="relative w-72 h-72 md:w-96 md:h-96 bg-gradient-to-tr from-pizzaria-accent/25 to-pizzaria-border/40 rounded-full flex items-center justify-center shadow-2xl border border-white">
                        <span className="text-8xl md:text-9xl animate-pulse">🍕</span>
                        <div className="absolute -bottom-4 bg-white px-6 py-3 rounded-2xl shadow-lg border border-pizzaria-border/20 flex items-center gap-3">
                            <span className="text-2xl">⭐</span>
                            <div>
                                <p className="text-xs text-pizzaria-muted font-medium">Avaliação dos clientes</p>
                                <p className="text-sm font-bold text-pizzaria-text">4.9 / 5.0 (Mais de 500 pedidos)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Seção de Benefícios Rápidos */}
            <div className="bg-white border-t border-pizzaria-border/10 py-12">
                <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                    <div className="flex flex-col md:flex-row items-center gap-4 p-4 rounded-xl bg-pizzaria-bg/50">
                        <div className="text-4xl p-3 bg-white rounded-xl shadow-sm border border-pizzaria-border/20">🚀</div>
                        <div>
                            <h3 className="font-bold text-pizzaria-text">Entrega Rápida</h3>
                            <p className="text-sm text-pizzaria-muted">Sua pizza chega quentinha e crocante rapidinho.</p>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-4 p-4 rounded-xl bg-pizzaria-bg/50">
                        <div className="text-4xl p-3 bg-white rounded-xl shadow-sm border border-pizzaria-border/20">🌾</div>
                        <div>
                            <h3 className="font-bold text-pizzaria-text">Ingredientes Selecionados</h3>
                            <p className="text-sm text-pizzaria-muted">Produtos frescos e de altíssima qualidade.</p>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-4 p-4 rounded-xl bg-pizzaria-bg/50">
                        <div className="text-4xl p-3 bg-white rounded-xl shadow-sm border border-pizzaria-border/20">🪵</div>
                        <div>
                            <h3 className="font-bold text-pizzaria-text">Assada a Lenha</h3>
                            <p className="text-sm text-pizzaria-muted">O verdadeiro aroma e sabor defumado artesanal.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Home;