import React, { useState, useEffect } from 'react';
import { createViagem, getViagem, updateViagem } from '../services/api';

const ViagemForm = ({ viagemId, onFormSubmit }) => {
  const [nome, setNome] = useState('');
  const [valor, setValor] = useState('');
  const [dataSaida, setdataSaida] = useState('');
  const [dataChegada, setdataChegada] = useState('');

  useEffect(() => {
    if (viagemId) {
      // Carregar os dados da viagem para edição
      getViagem(viagemId).then(response => {
        setNome(response.data.nome);
        setValor(response.data.valor);
        setdataSaida(response.data.dataSaida);
        setdataChegada(response.data.dataChegada);
      }).catch(error => {
        console.error('Erro ao carregar a viagem:', error);
      });
    } else {
      // Limpar os campos se for criação de nova viagem
      setNome('');
      setValor('');
      setdataSaida('');
      setdataChegada('');
    }
  }, [viagemId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const viagem = { nome, valor, dataSaida, dataChegada };

    try {
      if (viagemId) {
        // Atualizar viagem existente
        await updateViagem(viagemId, viagem);
      } else {
        // Criar nova viagem
        await createViagem(viagem);
      }
      onFormSubmit(); // Notificar que o formulario foi enviado
    } catch (error) {
      console.error('Erro ao salvar a viagem:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nome</label>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Valor</label>
        <input
          type="number"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Data Saida</label>
        <input
          type="text"
          value={dataSaida}
          onChange={(e) => setdataSaida(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Data Chegada</label>
        <input
          type="text"
          value={dataChegada}
          onChange={(e) => setdataChegada(e.target.value)}
          required
        />
      </div>
      <button type="submit">
        {viagemId ? 'Atualizar Viagem' : 'Adicionar Viagem'}
      </button>
    </form>
  );
};

export default ViagemForm;
