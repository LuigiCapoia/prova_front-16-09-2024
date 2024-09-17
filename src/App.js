import React, { useState } from 'react';
import ViagemList from './components/ViagemList';
import ViagemForm from './components/ViagemForm';

const App = () => {
  const [reload, setReload] = useState(false);

  const handleViagemCriada = () => {
    setReload(!reload);
  };

  return (
    <div>
      <h1>Gestão de Viagens</h1>
      <ViagemForm onViagemCriada={handleViagemCriada} />
      <ViagemList key={reload} />
    </div>
  );
};

export default App;
