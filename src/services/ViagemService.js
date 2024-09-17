import axios from 'axios';

const API_URL = 'http://localhost:8080/viagens';

export const getViagens = () => axios.get(API_URL);
export const addViagem = (viagem) => axios.post(API_URL, viagem);
export const deleteViagem = (id) => axios.delete(`${API_URL}/${id}`);
export const updateViagem = (id, viagem) => axios.put(`${API_URL}/${id}`, viagem);
