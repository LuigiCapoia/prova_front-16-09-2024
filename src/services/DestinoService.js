import axios from 'axios';

const API_URL = 'http://localhost:8080/destinos';

export const getDestinos = () => axios.get(API_URL);
export const addDestino = (destino) => axios.post(API_URL, destino);
export const deleteDestino = (id) => axios.delete(`${API_URL}/${id}`);
export const updateDestino = (id, destino) => axios.put(`${API_URL}/${id}`, destino);
