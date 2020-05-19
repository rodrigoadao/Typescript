"use strict";
class Data {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversario = new Data(3, 11, 1991);
console.log(aniversario);
const casamento = new Data; // É possivel emitir os "()"
class DataEsperta {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversarioEsperto = new DataEsperta(3, 11, 1991);
console.log(aniversario);
const casamentoEsperto = new DataEsperta; // É possivel emitir os "()"
class Produto {
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    resumo() {
        return `${this.nome} custa R$${this.preco} (${this.desconto * 100}% OFF)`;
    }
    calcularDesconto() {
        return this.preco * (1 - this.desconto);
    }
}
const bicicleta = new Produto('Bicicleta', 600.00);
const moto = new Produto('XT660', 32000, 0.1);
moto.calcularDesconto();
console.log(moto.resumo());
console.log(bicicleta);
class Carro {
    constructor(marca, modelo, velocidadeMaxima = 200) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
        this.velocidadeAtual = 0;
    }
    alterarVelocidade(delta) {
        const novaVelocidade = this.velocidadeAtual + delta;
        const velocidadeValida = novaVelocidade >= 0
            && novaVelocidade <= this.velocidadeMaxima;
        if (velocidadeValida) {
            this.velocidadeAtual = novaVelocidade;
        }
        else {
            this.velocidadeAtual - delta > 0 ? this.velocidadeMaxima : 0;
        }
        return this.velocidadeAtual;
    }
    acelerar() {
        return this.alterarVelocidade(5);
    }
    frear() {
        return this.alterarVelocidade(-5);
    }
}
const carro1 = new Carro('Ford', 'Ka', 180);
Array(50).fill(0).forEach(() => carro1.acelerar());
console.log(carro1.acelerar());
class Ferrari extends Carro {
    constructor(modelo, velocidadeMaxima) {
        super('Ferrari', modelo, velocidadeMaxima);
    }
    acelerar() {
        return this.alterarVelocidade(20);
    }
    frear() {
        return this.alterarVelocidade(-15);
    }
}
const f40 = new Ferrari('F40', 324);
// Getters & Setters
class Pessoa {
    constructor() {
        this._idade = 0;
    }
    get idade() {
        return this._idade;
    }
    set idade(valor) {
        if (valor >= 0 && valor <= 100) {
            this._idade = valor;
        }
    }
}
const pessoa2 = new Pessoa();
pessoa2.idade = 10;
console.log(pessoa2.idade);
let Matematica = /** @class */ (() => {
    class Matematica {
        static areaCirc(raio) {
            return Matematica.PI * raio * raio;
        }
    }
    Matematica.PI = 3.1416;
    return Matematica;
})();
// const ciruclo1 = new Matematica()
// console.log(ciruclo1.areaCirc(10))
console.log(Matematica.areaCirc(4));
class Calculo {
    constructor() {
        this.resultado = 0;
    }
    getResultado() {
        return this.resultado;
    }
}
class Soma extends Calculo {
    executar(...numeros) {
        this.resultado = numeros.reduce((t, a) => t + a);
    }
}
let soma1 = new Soma();
soma1.executar(2, 3, 4, 5);
console.log(soma1.getResultado());
let Unico = /** @class */ (() => {
    class Unico {
        constructor() {
        }
        static getInstace() {
            return Unico.instance;
        }
        agora() {
            return new Date;
        }
    }
    Unico.instance = new Unico;
    return Unico;
})();
//# sourceMappingURL=classes.js.map