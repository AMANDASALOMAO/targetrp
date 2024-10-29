/*Observe o trecho de código abaixo: int INDICE = 12, SOMA = 0, K = 1;
 enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; } imprimir(SOMA);

Ao final do processamento, qual será o valor da variável SOMA?
*/

import React from 'react';

const Sum: React.FC = () => {
  const calcularSoma = (indice: number): number => {
    let soma = 0;
    let k = 1;

    while (k < indice) {
      k += 1;
      soma += k;
    }

    return soma;
  };

  const indice = 12;
  const somaFinal = calcularSoma(indice);

  return (
    <div>
      <h1>Valor da Soma</h1>
      <p>A soma dos números de 1 até {indice} é: {somaFinal}</p>
    </div>
  );
};

export default Sum;
