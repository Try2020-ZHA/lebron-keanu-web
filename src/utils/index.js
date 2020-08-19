import axios from 'axios'


const service = axios.create({
    baseURL: 'http://10.222.232.139:8888',
    timeout: 60000
});

export default service;