import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080',
});

export const getViagens = () => api.get('/viagens');
export const getViagem = (id) => api.get(`/viagens/${id}`);
export const createViagem = (viagem) => api.post('/viagens', viagem);
export const updateViagem = (id, viagem) => api.put(`/viagens/${id}`, viagem); 
export const deleteViagem = (id) => api.delete(`/viagens/${id}`);
