import axios from 'axios'

const http = axios.create({
    baseURL: 'https://quizplomatic.onrender.com/api',
    withCredentials: false
})

http.interceptors.response.use((response) => response.data);

export default http