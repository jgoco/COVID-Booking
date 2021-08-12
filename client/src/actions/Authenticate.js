import axios from 'axios';

// const BASE_URL = process.env.BASE_URL;
const BASE_URL = "http://localhost:8000";

export function loginUser(data) {
    axios.post(`${BASE_URL}/user/login`, data).then( (response) => {
        console.log(response);
    });
}

export function logoutUser() {
    localStorage.removeItem("token");
}

export function registerUser(data) {
    axios.post(`${BASE_URL}/user/register`, data).then((response) => {
        console.log(response);
    })
}