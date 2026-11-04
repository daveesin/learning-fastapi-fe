function Menu({ nomeUsuario }) {


    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1>Menu</h1>
            <span>Bem-vindo, {nomeUsuario}!</span>
        </div>
    )
}

export default Menu;