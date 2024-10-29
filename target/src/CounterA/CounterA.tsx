/* Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre.

IMPORTANTE: Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
*/

import React, { useState } from 'react';
import styles from './CounterA.module.scss';

const CounterA: React.FC = () => {
  const [inputString, setInputString] = useState<string>('');
  const [resultado, setResultado] = useState<string>('');

  const verificarA = (str: string) => {
    const regex = /a/gi;
    const matches = str.match(regex);

    const quantidade = matches ? matches.length : 0;
    return quantidade;
  };

  const verificarString = () => {
    const quantidade = verificarA(inputString);
    if (quantidade > 0) {
      setResultado(`A letra 'a' aparece ${quantidade} vez(es) na string.`);
    } else {
      setResultado("A letra 'a' não aparece na string.");
    }
  };

  return (
    <div className={styles.container}>
      <h1>CounterA de Letra 'A'</h1>
      <input
        type="text"
        value={inputString}
        onChange={(e) => setInputString(e.target.value)}
        placeholder="Digite uma string"
      />
      <button onClick={verificarString}>Verificar</button>
      <p>{resultado}</p>
    </div>
  );
};

export default CounterA;
