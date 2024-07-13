/*
Exercício
Vamos fazer um pequeno exercício para consolidar o aprendizado. Tente converter as seguintes funções tradicionais em arrow functions:

javascript
Copiar código
function saudacao(nome) {
    return `Olá, ${nome}!`;
}
javascript
Copiar código
function quadrado(n) {
    return n * n;
}
javascript
Copiar código
const numeros = [1, 2, 3];
const somarTres = numeros.map(function(numero) {
    return numero + 3;
}); 
*/

let saudacao = (nome) => {
    return `ola, ${nome}`
}

saudacao = (nome) => `ola, ${nome}`

let quadrado = (n) => {
    return n*n
}

quadrado = (n) => n*n

const numeros = [1,2,3]
const somarTres = numeros.map((numero) => numero + 3)