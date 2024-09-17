import React from 'react';

const ViagemList = ({ viagens, onEdit, onDelete }) => {
    return (
        <div>
            <h3>Lista de Viagens</h3>
            <ul>
                {viagens.map((viagem) => (
                    <li key={viagem.id}>
                        <strong>Nome:</strong> {viagem.nome} <br />
                        <strong>Data de Saída:</strong> {new Date(viagem.dataSaida).toLocaleDateString()} <br />
                        <strong>Data de Chegada:</strong> {new Date(viagem.dataChegada).toLocaleDateString()} <br />
                        <strong>Valor:</strong> R${viagem.valor.toFixed(2)} <br />
                        <strong>Destino:</strong> {viagem.destino ? viagem.destino.nome : 'N/A'} <br />
                        <button onClick={() => onEdit(viagem)}>Editar</button>
                        <button onClick={() => onDelete(viagem.id)}>Deletar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ViagemList;
