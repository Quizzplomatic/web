import createHttp from "./BaseService";

const http = createHttp({ useAccessToken: true })

export const getCurrentUser = () => http.get('/users/me')