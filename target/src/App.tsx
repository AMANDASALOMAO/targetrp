import React, { useState } from 'react';
import Fibonacci from './Fibonacci/Fibonacci';
import CounterA from './CounterA/CounterA';
import Sum from './Sum/Sum';
import Sequence from './Sequence/Sequence';
import Lamp from './Lamp/Lamp';


const componentes: Record<number, JSX.Element> = {
    1: <Fibonacci />,
    2: <CounterA />,
    3: <Sum />,
    4: <Sequence />,
    5: <Lamp state={'on'} label={''} />,
  };

const App: React.FC = () => {
    const [componenteSelecionado, setComponenteSelecionado] = useState<JSX.Element | null>(null);

    const handleClick = (numero: number) => {
      setComponenteSelecionado(componentes[numero] || null);
    };

  return (
    <div>
      <h1>Escolha um número para ver um problema:</h1>
      <div>
        {[1, 2, 3, 4, 5].map((numero) => (
          <button key={numero} onClick={() => handleClick(numero)}>
            {numero}
          </button>
        ))}
      </div>
      <div>
        {componenteSelecionado}
      </div>
    </div>
  );
};

export default App;