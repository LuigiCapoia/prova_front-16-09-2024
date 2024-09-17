import React from 'react';

const ViagemItem = ({ viagem, onDelete }) => {
  return (
    <li>
      <strong>{viagem.nome}</strong> - R${viagem.valor.toFixed(2)}
      <strong>{viagem.dataSaida}</strong>
      <strong>{viagem.dataChegada}</strong>
      <button onClick={() => onDelete(viagem.id)}>Deletar</button>
    </li>
  );
};

export default ViagemItem;
