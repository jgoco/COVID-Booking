import axios from 'axios';

// const BASE_URL = process.env.BASE_URL;
const BASE_URL = "http://localhost:8000";

export function loginUser(data) {
    axios.post(`${BASE_URL}/user/login`, data, {withCredentials: true, credentials: 'include'}).then( (response) => {
        console.log(response);
        if (response.data.accessToken) {
            localStorage.setItem('jwt', response.data.accessToken);
            localStorage.setItem('user', JSON.stringify(response.data));
        }
    });
}

export const logout = () => {
    localStorage.removeItem("user");
};

export const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
  };


export function registerUser(data) {
    axios.post(`${BASE_URL}/user/register`, data, {withCredentials: true, credentials: 'include'}).then((response) => {
        console.log(response);
        if (response.data.accessToken) {
            localStorage.setItem('jwt', response.data.accessToken);
            localStorage.setItem('user', JSON.stringify(response.data));
        }
    })
}