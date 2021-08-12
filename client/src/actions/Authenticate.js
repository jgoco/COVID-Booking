import axios from 'axios';

// const BASE_URL = process.env.BASE_URL;
const BASE_URL = "https://rec-center-booking.herokuapp.com";

export function loginUser(data) {
    axios.post(`${BASE_URL}/api/user/login`, data, {withCredentials: true, credentials: 'include'}).then( (response) => {
        console.log(response);
    });
}

export function logoutUser() {
    localStorage.removeItem("token");
}

export function registerUser(data) {
    axios.post(`${BASE_URL}/api/user/register`, data, {withCredentials: true, credentials: 'include'}).then((response) => {
        console.log(response);
    })
}