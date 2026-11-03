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
export async function criar_conta({ nome, email, senha }) {
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
        sessionStorage.setItem('access_token', data.access_token);
        sessionStorage.setItem('refresh_token', data.refresh_token);
        sessionStorage.setItem('token_type', data.token_type);
        return data;
    } catch (error) {
        console.error('Erro ao fazer login:', error);
        throw error;
    }
};