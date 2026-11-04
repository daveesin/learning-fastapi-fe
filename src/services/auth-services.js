const API_URL = import.meta.env.VITE_API_URL;


/**
 * Realiza o cadastro de um novo usuário na API.
 * 
 * @param {Object} userData - Objeto contendo os dados de cadastro.
 * @param {string} userData.nome - Nome do usuário.
 * @param {string} userData.email - E-mail do usuário.
 * @param {string} userData.senha - Senha do usuário.
 * @returns {Promise<Object>} Dados de resposta da API (ex: confirmação ou dados do usuário criado).
 */
export async function criarConta({ nome, email, senha }) {
    try {
        const response = await fetch(`${API_URL}/auth/criar_conta`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nome, email, senha }),
        });

        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message || 'Erro ao criar conta');
        }
        return data;
    } catch (error) {
        console.error('Erro ao criar conta:', error);
        throw error;
    }
};
    

/**
 * Realiza o login de um usuário na API.
 * 
 * @param {Object} userData - Objeto contendo os dados de login.
 * @param {string} userData.email - E-mail do usuário.
 * @param {string} userData.senha - Senha do usuário.
 * @returns {Promise<Object>} Dados de resposta da API (ex: confirmação ou dados do usuário logado).
 */
export async function login({ email, senha }) {
    try {
        const response = await fetch(`${API_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, senha }),
        });

        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.detail || 'Erro ao fazer login');
        }
        localStorage.setItem('access_token', data.access_token);
        localStorage.setItem('refresh_token', data.refresh_token);
        localStorage.setItem('token_type', data.token_type);
        return data;
    } catch (error) {
        console.error('Erro ao fazer login:', error);
        throw error;
    }
};


/**
 * Realiza a verificação de status de um token na API.
 * 
 * @param {string} token - Token de refresh.
 * @returns {Promise<Object>} Dados de resposta da API (ex: confirmação do novo token).
 */
export async function confereStatusToken(token) {
    try {
        const response = await fetch(`${API_URL}/auth/verificar_token`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        });

        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.detail || 'Erro ao verificar token');
        }

        return data;
    } catch (error) {
        console.error('Erro ao verificar token:', error);
        throw error;
    }
}


/**
 * Realiza o refresh de um token na API caso o refresh token seja válido ainda.
 * 
 * @returns {Promise<Object>} Dados de resposta da API (ex: confirmação do novo token).
 */
export async function refreshToken() {
    try {
        const refreshToken = localStorage.getItem('refresh_token');
        if (!refreshToken) {
            throw new Error('Refresh token não encontrado');
        }

        const response = await fetch(`${API_URL}/auth/refresh`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${refreshToken}`,
            },
        });

        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.detail || 'Erro ao atualizar token');
        }

        localStorage.removeItem('access_token');
        localStorage.removeItem('token_type');
        localStorage.setItem('access_token', data.access_token);
        localStorage.setItem('token_type', data.token_type);
        return data;
    } catch (error) {
        console.error('Erro ao atualizar token:', error);
        localStorage.removeItem('access_token');
        localStorage.removeItem('token_type');
        localStorage.removeItem('refresh_token');
        throw error;
    }
}


/**
 * Realiza o refresh de um token na API caso o refresh token seja válido ainda.
 */
export async function verificarSessaoCompleta() {
    const accessToken = localStorage.getItem('access_token');
    const refreshTokenVar = localStorage.getItem('refresh_token');

    if (!accessToken && !refreshTokenVar) {
        return false;
    }

    if (accessToken) {
        try {
            // Se confereStatusToken passou sem dar throw, o token é válido!
            const userData = await confereStatusToken(accessToken);
            return userData.usuario || true; 
        } catch (error) {
            console.warn('Access token expirado. Tentando refresh...', error);
        }
    }

    if (refreshTokenVar) {
        try {
            await refreshToken();
            const newAccessToken = localStorage.getItem('access_token');
            const userData = await confereStatusToken(newAccessToken);
            return userData.usuario || true; 
        } catch (error) {
            console.error('Erro ao atualizar token:', error);
        }
    }

    return false;
}