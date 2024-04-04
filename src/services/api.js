import axios from 'axios';
import { HOST_NAME } from '../constants/hosts';
const instance = axios.create({
    baseURL: HOST_NAME,
    timeout: 30000,
});

export default instance;