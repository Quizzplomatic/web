import createHttp from "./BaseService";

const http = createHttp({ useAccessToken: false })

export const loginRequest = (data) => http.post('/login', data);
export const registerRequest = (data) => http.post('/users', data);
