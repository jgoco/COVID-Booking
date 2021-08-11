import axios from 'axios';
import jwtDecode from 'jwt-decode';

// const BASE_URL = process.env.BASE_URL;
const BASE_URL = "http://localhost:8000";

export function loginUser(data) {
    return axios.post(`${BASE_URL}/user/login`, data);
}

export function getCurrentUser() {
    try {
        const token = localStorage.getItem("token");
        return jwtDecode(token);
    } catch (error) {
        return null;
    }
}

export function logoutUser() {
    localStorage.removeItem("token");
}

export function registerUser(data) {
    return axios.post(`${BASE_URL}/user/register`, data);
}