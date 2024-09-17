import React, { useState, useEffect } from 'react';

const ViagemForm = ({ currentViagem, onSave, destinos }) => {
    const [nome, setNome] = useState('');
    const [dataSaida, setDataSaida] = useState('');
    const [dataChegada, setDataChegada] = useState('');
    const [valor, setValor] = useState('');
    const [destinoId, setDestinoId] = useState('');

    useEffect(() => {
        if (currentViagem) {
            setNome(currentViagem.nome);
            setDataSaida(currentViagem.dataSaida);
            setDataChegada(currentViagem.dataChegada);
            setValor(currentViagem.valor);
            setDestinoId(currentViagem.destino.id);
        } else {
            setNome('');
            setDataSaida('');
            setDataChegada('');
            setValor('');
            setDestinoId('');
        }
    }, [currentViagem]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const viagem = {
            id: currentViagem ? currentViagem.id : null,
            nome,
            dataSaida,
            dataChegada,
            valor,
            destino: destinos.find(d => d.id === parseInt(destinoId))
        };
        onSave(viagem);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Nome da viagem"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
            />
            <input
                type="date"
                value={dataSaida}
                onChange={(e) => setDataSaida(e.target.value)}
            />
            <input
                type="date"
                value={dataChegada}
                onChange={(e) => setDataChegada(e.target.value)}
            />
            <input
                type="number"
                placeholder="Valor"
                value={valor}
                onChange={(e) => setValor(e.target.value)}
            />
            <select
                value={destinoId}
                onChange={(e) => setDestinoId(e.target.value)}
            >
                <option value="">Selecione o destino</option>
                {destinos.map((destino) => (
                    <option key={destino.id} value={destino.id}>
                        {destino.nome}
                    </option>
                ))}
            </select>
            <button type="submit">{currentViagem ? 'Atualizar' : 'Salvar'}</button>
        </form>
    );
};

export default ViagemForm;
