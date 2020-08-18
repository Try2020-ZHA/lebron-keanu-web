import axios from 'axios'


const service = axios.create({
    baseURL: 'https://',
    timeout: 60000
});

export default service;