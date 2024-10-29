/*Descubra a lógica e complete o próximo elemento:
a) 1, 3, 5, 7, ___
b) 2, 4, 8, 16, 32, 64, ____
c) 0, 1, 4, 9, 16, 25, 36, ____
d) 4, 16, 36, 64, ____
e) 1, 1, 2, 3, 5, 8, ____
f) 2,10, 12, 16, 17, 18, 19, ____
*/
import React from 'react';

const Sequence: React.FC = () => {
  return (
    <div>
      <h1>Sequências Numéricas</h1>
      <ul>
        <li>
          a) 1, 3, 5, 7, <strong>9</strong> (Números ímpares)
        </li>
        <li>
          b) 2, 4, 8, 16, 32, 64, <strong>128</strong> (Potências de 2)
        </li>
        <li>
          c) 0, 1, 4, 9, 16, 25, 36, <strong>49</strong> (Quadrados dos inteiros)
        </li>
        <li>
          d) 4, 16, 36, 64, <strong>100</strong> (Quadrados dos pares)
        </li>
        <li>
          e) 1, 1, 2, 3, 5, 8, <strong>13</strong> (Sequência de Fibonacci)
        </li>
        <li>
          f) 2, 10, 12, 16, 17, 18, 19, <strong>20</strong> (Números pares seguidos)
        </li>
      </ul>
    </div>
  );
};

export default Sequence;
