// Questão 1
console.log("Questão 1");
let INDICE = 13;
let SOMA = 0;
let K = 0;

while (K < INDICE) {
  K = K + 1;
  SOMA = SOMA + K;
}

console.log("Ao final do processamento, o valor da variável SOMA é:", SOMA);

// Questão 2
console.log("Questão 2");

function pertenceFibonacci(num) {
  let a = 0,
    b = 1,
    temp;
  while (b < num) {
    temp = b;
    b = a + b;
    a = temp;
  }
  return b === num;
}

let numero = 10; // Altere para o número que deseja verificar
if (pertenceFibonacci(numero)) {
  console.log(numero + " pertence à sequência de Fibonacci.");
} else {
  console.log(numero + " não pertence à sequência de Fibonacci.");
}

// Questão 3
console.log("Questão 3");

// Exemplo de dados em JSON (pode ser carregado de um arquivo externo)
const faturamentoDiarioJSON = `{
  "faturamento": [
    {"dia": 1, "valor": 1500},
    {"dia": 2, "valor": 2000},
    {"dia": 3, "valor": 2500},
    {"dia": 4, "valor": 3000},
    {"dia": 5, "valor": 1800},
    {"dia": 6, "valor": 2200},
    {"dia": 7, "valor": 2700},
    {"dia": 8, "valor": 3200},
    {"dia": 9, "valor": 2900},
    {"dia": 10, "valor": 3100},
    {"dia": 11, "valor": 1600},
    {"dia": 12, "valor": 2400},
    {"dia": 13, "valor": 2800},
    {"dia": 14, "valor": 3500},
    {"dia": 15, "valor": 4000}
  ]
}`;

// Função para calcular o menor, maior e dias acima da média
function calcularFaturamento(faturamentoJSON) {
  const faturamento = JSON.parse(faturamentoJSON).faturamento;

  // Filtra os dias com faturamento
  const valoresFaturamento = faturamento
    .map((item) => item.valor)
    .filter((valor) => valor > 0);

  // Calcula o menor valor de faturamento
  const menorValor = Math.min(...valoresFaturamento);

  // Calcula o maior valor de faturamento
  const maiorValor = Math.max(...valoresFaturamento);

  // Calcula a média mensal
  const mediaMensal =
    valoresFaturamento.reduce((acc, val) => acc + val, 0) /
    valoresFaturamento.length;

  // Conta o número de dias com faturamento acima da média
  const diasAcimaDaMedia = valoresFaturamento.filter(
    (valor) => valor > mediaMensal
  ).length;

  // Retorna um objeto com os resultados
  return {
    menorValor,
    maiorValor,
    diasAcimaDaMedia,
  };
}

// Chama a função e armazena o resultado
const resultado = calcularFaturamento(faturamentoDiarioJSON);

// Exibe os resultados no console
console.log("Menor valor de faturamento:", resultado.menorValor);
console.log("Maior valor de faturamento:", resultado.maiorValor);
console.log(
  "Número de dias acima da média mensal:",
  resultado.diasAcimaDaMedia
);

// Questão 4
console.log("Questão 4");
// Valores de faturamento mensal por estado
const faturamentoPorEstado = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

// Função para calcular o percentual de representação de cada estado
function calcularPercentuais(faturamento) {
  // Calcula o faturamento total
  const totalFaturamento = Object.values(faturamento).reduce(
    (acc, val) => acc + val,
    0
  );

  // Cria um objeto para armazenar os percentuais
  const percentuais = {};

  // Calcula o percentual de cada estado
  for (const estado in faturamento) {
    percentuais[estado] =
      ((faturamento[estado] / totalFaturamento) * 100).toFixed(2) + "%";
  }

  return percentuais;
}

// Chama a função e armazena os resultados
const percentuaisRepresentacao = calcularPercentuais(faturamentoPorEstado);

// Exibe os resultados no console
console.log("Percentual de representação por estado:");
for (const estado in percentuaisRepresentacao) {
  console.log(`${estado}: ${percentuaisRepresentacao[estado]}`);
}

// Questão 5
console.log("Questão 5");

// String a ser invertida (pode ser alterada conforme necessário)
let str = "Exemplo de string para inverter";

// Função para inverter a string
function inverterString(s) {
  let stringInvertida = ""; // Variável para armazenar a string invertida

  // Loop para percorrer a string de trás para frente
  for (let i = s.length - 1; i >= 0; i--) {
    stringInvertida += s[i]; // Adiciona o caractere atual à string invertida
  }

  return stringInvertida; // Retorna a string invertida
}

// Chama a função e armazena o resultado
const resultadoInvertido = inverterString(str);

// Exibe o resultado no console
console.log("String original:", str);
console.log("String invertida:", resultadoInvertido);
