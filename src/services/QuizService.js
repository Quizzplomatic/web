import createHttp from "./BaseService";

const http = createHttp({ useAccessToken: false });

export const getQuestions = () => http.get('/quiz');
export const createQuestion = (data) => http.post('/new', data);
export const updateQuestion = (data) => http.patch('/update', data);
export const deleteQuestion = (id) => http.delete(`/delete/${id}`);