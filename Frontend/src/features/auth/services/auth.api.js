import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: true
});

export async function register({name,email,password}){
    try {
        const response = await api.post('/user/register', {
            name,
            email,
            password
        });
        console.log('Registration successful now:', response.data);
        console.log('User data:', response.data.newUser);
        return response.data;
    }
    catch (error) {
        console.error('Registration error:', error.message);
        throw error;
    }
}

export async function login({email,password}){
    try {
        const response = await api.post('/user/login', {
            email,
            password
        });
        console.log('Login successful 2:', response.data);
        return response.data;
    }
    catch (error) {
        console.error('Login error:', error);
    }
}

export async function logout(){
    try {
        const response = await api.get('/user/logout', {});
        return response.data;
    }
    catch (error) {
        console.error('Logout error:', error);
    }
}

export async function getCurrentUser(){
    try {
        const response = await api.get('/user/getme');
        return response.data;
    }
    catch (error) {
        console.error('Get current user error:', error);
    }
}