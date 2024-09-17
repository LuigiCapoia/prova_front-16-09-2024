import React from 'react';

const DestinoList = ({ destinos, onDelete }) => {
    return (
        <div>
            <h3>Lista de Destinos</h3>
            <ul>
                {destinos.map((destino) => (
                    <li key={destino.id}>
                        <strong>Nome:</strong> {destino.nome} <br />
                        <button onClick={() => onDelete(destino.id)}>Deletar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DestinoList;
