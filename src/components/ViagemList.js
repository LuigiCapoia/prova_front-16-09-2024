import React, { useState, useEffect } from 'react';
import { getViagens, deleteViagem } from '../services/api';
import ViagemForm from './ViagemForm';

const ViagemList = () => {
  const [viagens, setViagens] = useState([]);
  const [viagemIdParaEditar, setViagemIdParaEditar] = useState(null);

  useEffect(() => {
    carregarViagens();
  }, []);

  // Carregar a lista de viagens do backend
  const carregarViagens = async () => {
    try {
      const response = await getViagens();
      setViagens(response.data);
    } catch (error) {
      console.error('Erro ao carregar Viagens:', error);
    }
  };

  // Excluir Viagem
  const handleDelete = async (id) => {
    try {
      await deleteViagem(id);
      carregarViagens(); // Atualizar lista após a exclusão
    } catch (error) {
      console.error('Erro ao excluir Viagem:', error);
    }
  };

  // Editar Viagens
  const handleEdit = (id) => {
    setViagemIdParaEditar(id); // Configura a Viagem para edição
  };

  // Limpar o formulário após edição/criação
  const handleFormSubmit = () => {
    setViagemIdParaEditar(null);
    carregarViagens(); // Atualizar lista após a edição
  };

  return (
    <div>
      <h2>Lista de Viagens</h2>
      <ViagemForm viagemId={viagemIdParaEditar} onFormSubmit={handleFormSubmit} />
      <ul>
        {viagens.map((viagem) => (
          <li key={viagem.id}>
            {viagem.nome} - R$ {viagem.valor.toFixed(2)} - {viagem.dataSaida} - {viagem.dataChegada}
            <button onClick={() => handleEdit(viagem.id)}>Editar</button>
            <button onClick={() => handleDelete(viagem.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );

};

export default ViagemList;
