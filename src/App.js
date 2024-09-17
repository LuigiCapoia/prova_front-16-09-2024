import React, { useState, useEffect } from 'react';
import DestinoForm from './components/DestinoForm';
import DestinoList from './components/DestinoList';
import ViagemForm from './components/ViagemForm';
import ViagemList from './components/ViagemList';
import { getDestinos, addDestino, updateDestino, deleteDestino } from './services/DestinoService';
import { getViagens, addViagem, updateViagem, deleteViagem } from './services/ViagemService';

const App = () => {
    const [destinos, setDestinos] = useState([]);
    const [viagens, setViagens] = useState([]);
    const [currentDestino, setCurrentDestino] = useState(null);
    const [currentViagem, setCurrentViagem] = useState(null);

    useEffect(() => {
        fetchDestinos();
        fetchViagens();
    }, []);

    const fetchDestinos = async () => {
        const response = await getDestinos();
        setDestinos(response.data);
    };

    const fetchViagens = async () => {
        const response = await getViagens();
        setViagens(response.data);
    };

    const handleSaveDestino = async (destino) => {
        if (destino.id) {
            await updateDestino(destino.id, destino);
        } else {
            await addDestino(destino);
        }
        fetchDestinos(); 
        setCurrentDestino(null); 
    };

    const handleSaveViagem = async (viagem) => {
        if (viagem.id) {
            await updateViagem(viagem.id, viagem);
        } else {
            await addViagem(viagem);
        }
        fetchViagens(); 
        setCurrentViagem(null); 
    };

    const handleEditDestino = (destino) => {
        setCurrentDestino(destino);
    };

    const handleEditViagem = (viagem) => {
        setCurrentViagem(viagem);
    };

    const handleDeleteDestino = async (id) => {
        await deleteDestino(id);
        fetchDestinos(); 
    };

    const handleDeleteViagem = async (id) => {
        await deleteViagem(id);
        fetchViagens(); 
    };

    return (
        <div>
            <h1>Gerenciamento de Destinos e Viagens</h1>
            
            <h2>Destinos</h2>
            <DestinoForm currentDestino={currentDestino} onSave={handleSaveDestino} />
            <DestinoList destinos={destinos} onEdit={handleEditDestino} onDelete={handleDeleteDestino} />
            
            <h2>Viagens</h2>
            <ViagemForm currentViagem={currentViagem} onSave={handleSaveViagem} destinos={destinos} />
            <ViagemList viagens={viagens} onEdit={handleEditViagem} onDelete={handleDeleteViagem} />
        </div>
    );
};

export default App;
