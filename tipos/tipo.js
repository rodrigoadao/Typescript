"use strict";
// string
let nome = 'João';
console.log(nome);
// nome = 28
//numbers
let idade = 27;
// idade = 'Ana'
idade = 27.5;
console.log(idade);
//boolean
let possuirHobbies = true;
// possuirHobbies =  1
console.log(possuirHobbies);
// tipos explicitos
let minhaIdade;
minhaIdade = 27;
console.log(typeof minhaIdade);
// minhaIdade = 'Idade 27'
// console.log(typeof minhaIdade)
//array
let hobbies = ["Cozinha", "Praticcar Esportes"];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [100];
// hobbies = 100
console.log(hobbies);
//tuplas
let endereco = ["Av Principal", 99];
console.log(endereco);
endereco = ["Rua Imporante", 1260];
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 1] = "Verde";
    Cor[Cor["Azul"] = 2] = "Azul";
})(Cor || (Cor = {}));
let minhaCor = Cor.Verde;
console.log(minhaCor);
// any
let carro = 'BMW';
console.log(carro);
carro = { marca: 'BMW', ano: 2019 };
console.log(carro);
// funções
function retornaMeuNome() {
    return nome;
}
console.log(retornaMeuNome());
function digaOi() {
    console.log('oi');
}
digaOi();
function multiplicar(numA, numB) {
    return numA * numB;
}
console.log(multiplicar(2, 9));
const teste = function (a, b) {
    return false;
};
// tipo função
let calculo;
calculo = multiplicar;
console.log(calculo(5, 10));
// objetos
let usuario = {
    nome: 'João',
    idade: 27
};
let funcionario;
funcionario = {
    nome: 'Rodrigo',
    supervisores: ['André', 'Eduardo'],
    baterPonto: function (hora) {
        if (hora <= 8) {
            return 'Ponto normal (<= 8)';
        }
        else {
            return 'Fora do horário ( > 8 )';
        }
    }
};
console.log(funcionario.nome);
console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(7));
// Union Types
let nota;
nota = 10;
console.log(`Minha nota é ${nota}!`);
nota = '10';
console.log(`Minha nota é ${nota}!`);
// never
function falha(msg) {
    //throw new Error(msg)
}
const porduto = {
    nome: 'Sabão',
    preco: -1,
    validarProduto() {
        if (this.nome.trim().length == 0) {
            falha('Precisa ter um nome');
        }
        if (this.preco <= 0) {
            falha('Preço inválido');
        }
    }
};
porduto.validarProduto();
//Null
let altura = 12;
// altura = null
// Converter codigo para TS
let alturaOpcional = 12;
alturaOpcional = null;
let contaBancaria = {
    saldo: 3456,
    depositar(valor) {
        this.saldo += valor;
    }
};
let correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
//# sourceMappingURL=tipo.js.map