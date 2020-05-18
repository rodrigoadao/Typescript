"use strict";
// string
var nome = 'João';
console.log(nome);
// nome = 28
//numbers
var idade = 27;
// idade = 'Ana'
idade = 27.5;
console.log(idade);
//boolean
var possuirHobbies = true;
// possuirHobbies =  1
console.log(possuirHobbies);
// tipos explicitos
var minhaIdade;
minhaIdade = 27;
console.log(typeof minhaIdade);
// minhaIdade = 'Idade 27'
// console.log(typeof minhaIdade)
//array
var hobbies = ["Cozinha", "Praticcar Esportes"];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [100];
// hobbies = 100
console.log(hobbies);
//tuplas
var endereco = ["Av Principal", 99];
console.log(endereco);
endereco = ["Rua Imporante", 1260];
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 1] = "Verde";
    Cor[Cor["Azul"] = 2] = "Azul";
})(Cor || (Cor = {}));
var minhaCor = Cor.Verde;
console.log(minhaCor);
// any
var carro = 'BMW';
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
var teste = function (a, b) {
    return false;
};
// tipo função
var calculo;
calculo = multiplicar;
console.log(calculo(5, 10));
// objetos
var usuario = {
    nome: 'João',
    idade: 27
};
var funcionario;
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
var nota;
nota = 10;
console.log("Minha nota \u00E9 " + nota + "!");
nota = '10';
console.log("Minha nota \u00E9 " + nota + "!");
// never
function falha(msg) {
    //throw new Error(msg)
}
var porduto = {
    nome: 'Sabão',
    preco: -1,
    validarProduto: function () {
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
var altura = 12;
// altura = null
// Converter codigo para TS
var alturaOpcional = 12;
alturaOpcional = null;
var contaBancaria = {
    saldo: 3456,
    depositar: function (valor) {
        this.saldo += valor;
    }
};
var correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
//# sourceMappingURL=tipo.js.map