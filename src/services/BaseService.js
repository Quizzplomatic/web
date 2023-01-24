import axios from 'axios';
import { getAccessToken } from '../store/accessTokenStore';

const create = ({ useAccessToken } = { useAccessToken: true }) => {
    const http = axios.create({
        baseURL: 'https://quizplomatic.onrender.com/api',
        // baseURL: 'http://localhost:3001/api',   
        withCredentials: false
    });
    
    http.interceptors.request.use(
        (request) => {
            if (useAccessToken && getAccessToken()) {
                request.headers.common.Authorization = `Bearer ${getAccessToken()}`
            }
            
            return request;
        }
    )

    http.interceptors.response.use((response) => response.data);

    return http;
}

export default create;