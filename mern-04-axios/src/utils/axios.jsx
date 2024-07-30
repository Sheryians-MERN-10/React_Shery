import axios from "axios";

const instance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
    timeout: 10000, // Optional: Set a timeout for requests
    headers: {
        'Content-Type': 'application/json', // Set default headers
    },
})

export default instance;

// https://jsonplaceholder.typicode.com/users

// https -> protocol
// jsonplaceholder -> domaain/name
// typicode.com -> subdomain
// /users -> endpoint/route