import React, { useState } from 'react';
import styles from './Lamp.module.scss';

type LampState = 'on' | 'warm' | 'off';

interface LampProps {
  state: LampState;
  label: string;
}

const Lamp: React.FC<LampProps> = ({ state, label }) => {
    const [lampStates, setLampStates] = useState({
        A: 'off',
        B: 'off',
        C: 'off',
      });
      const [message, setMessage] = useState('');
    
      const handleFirstSwitch = () => {
        setLampStates({ A: 'warm', B: 'off', C: 'off' });
        setMessage('Interruptor A ligado por 10 segundos..');
        
        setTimeout(() => {
          handleSecondSwitch();
        }, 10000);
      };
    
      const handleSecondSwitch = () => {
        setLampStates((prev) => ({ ...prev, B: 'on', A: 'warm' }));
        setMessage('Interruptor B ligado. Vá verificar as lâmpadas.');
      };
    
      const checkLamps = () => {
        const results = Object.entries(lampStates).map(([key, state]) => {
          if (state === 'on') return `Lâmpada ${key} está ACESA (controlada pelo Interruptor B)`;
          if (state === 'warm') return `Lâmpada ${key} está QUENTE (controlada pelo Interruptor A)`;
          return `Lâmpada ${key} está DESLIGADA (controlada pelo Interruptor C)`;
        });
        setMessage(results.join(' | '));
      };
    
      return (
        <div>
          <h1>Simulador de Interruptores e Lâmpadas</h1>
          <button onClick={handleFirstSwitch}>Primeira ida - Ligar Interruptor A</button>
          <button onClick={checkLamps}>Segunda ida - Checar Lâmpadas</button>
          <div className={styles.container}>
            <div className={`${styles.lamp} ${styles[lampStates.A]}`}>Lâmpada A</div>
            <div className={`${styles.lamp} ${styles[lampStates.B]}`}>Lâmpada B</div>
            <div className={`${styles.lamp} ${styles[lampStates.C]}`}>Lâmpada C</div>
          </div>
          <p>{message}</p>
        </div>
      );
    };

export default Lamp;
