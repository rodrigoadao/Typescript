"use strict";
// let & const 
let seraQuePode = 10;
console.log(seraQuePode);
let estaFrio = true;
if (estaFrio) {
    let acao = 'Colocar o casaco!';
    console.log(acao);
}
const cpf = '123.456.000-99';
//Arrow Function 
const somar = function (n1, n2) {
    return n1 + n2;
};
console.log(somar(2, 2));
const subtrair = (n1, n2) => n1 - n2;
console.log(subtrair(10, 2));
const saudacao = () => console.log("Olá");
saudacao();
const falarCom = (pessoa) => console.log('Ola ' + pessoa);
falarCom('Rodrigo');
// THIS
// function normaComThis(){
//     console.log(this)
// }
// const normaComThisEspecial = normaComThis.bind(2)
// normaComThisEspecial()
// const arrowComThis = () => console.log(this)
// arrowComThis()
//Parâmetros padrão
function contagemRegressiva(inicio = 3) {
    console.log(inicio);
}
contagemRegressiva();
contagemRegressiva(10);
// Operadores Rest & Spread
const numbers = [1, 10, 88, -5];
console.log(Math.max(...numbers));
const TurmaA = ['joão', 'Maria', 'Fernanda'];
const turmaB = ['Fernando', 'Miguel', 'Lorena', ...TurmaA];
console.log(turmaB);
function retornarArray(...args) {
    return args;
}
const numeros = retornarArray(1, 2, 3, 4, 366);
console.log(numeros);
// Operadores Rest & Spread Tupla
const tupla = [1, 'abc', false];
function tuplaParam1(a, b, c) {
    console.log(`)1 ${a} ${b} ${c}`);
}
tuplaParam1(...tupla);
function tuplaParam2(...params) {
    console.log(`2) ${params[0]} ${params[1]} ${params[2]} `);
}
tuplaParam2(...tupla);
// Destructuring (array)
const caracteristicas = ['Motor Zetec 1.8', 2020];
// const motor = caracteristicas[0]
// const ano = caracteristicas[1]
const [motor, ano] = caracteristicas;
console.log(motor);
console.log(ano);
// Destructuring (Objeto)
const item = {
    nome: "SSD 480GB",
    preco: 200,
    teste: {
        w: 'importado'
    }
};
// const nomeItem = item.nome
// const preco = item.preco
const { nome: n, preco, teste: { w } } = item;
console.log(n);
console.log(preco);
console.log(w);
//Callback
function esperar3s(callback) {
    setTimeout(() => {
        callback('3 segundos depois...');
    }, 3000);
}
esperar3s(function (resultado) {
    console.log(resultado);
});
function esperar3sPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('3 segundos depois promise...');
        }, 3000);
    });
}
esperar3sPromise()
    .then(dado => console.log(dado));
fetch('https://swapi.dev1/api/people/1')
    .then(res => res.json())
    .then(personagem => personagem.films)
    .then(films => fetch(films[0]))
    .then(resFilm => resFilm.json())
    .then(filme => console.log(filme.title))
    .catch(err => console.log('Catch!!!!' + err));
//# sourceMappingURL=ecmascript.js.map