import React, { useState } from 'react';

const DestinoForm = ({ onSave }) => {
    const [nome, setNome] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const destino = { nome };

        onSave(destino);

        setNome('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Nome do Destino:</label>
            <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
            />
            <button type="submit">Salvar Destino</button>
        </form>
    );
};

export default DestinoForm;
