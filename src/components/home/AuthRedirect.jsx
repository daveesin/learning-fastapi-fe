import Home from './Home';
import Menu from './Menu';

function AuthRedirect() {
    const token = localStorage.getItem('access_token');

    if (token) {
        return <Menu />;
    }

    return <Home />;
}

export default AuthRedirect;