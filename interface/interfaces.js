"use strict";
function saudarComOla(pessoa) {
    console.log('Olá, ' + pessoa.nome);
}
function mudarNome(pessoa) {
    pessoa.nome = 'Rodrigo';
}
const pessoa = {
    nome: 'João',
    idade: 27,
    saudar(sobrenome) {
        console.log('Ola, meu nome é ' + this.nome + ' ' + sobrenome);
    }
};
saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
pessoa.saudar('Skywalker');
//Usando Classes
class Cliente {
    constructor() {
        this.nome = '';
        this.ultimaCompra = new Date;
    }
    saudar(sobrenome) {
        console.log('Ola, meu nome é ' + this.nome + ' ' + sobrenome);
    }
}
const meuCliente = new Cliente();
meuCliente.nome = 'Han';
saudarComOla(meuCliente);
meuCliente.saudar('Solo');
console.log(meuCliente.ultimaCompra);
let potencia;
potencia = function (base, exp) {
    return Array(exp).fill(base).reduce((t, a) => t * a);
};
console.log(potencia(2, 2));
class RealA {
    a() { }
}
class RealB {
    a() { }
    b() { }
}
class RealABC {
    a() { }
    b() { }
    c() { }
}
class abstrataABD {
    a() { }
    b() { }
}
Object.prototype.log = function () {
    console.log(this.toString());
};
const x = 2;
const y = 3;
const z = 4;
x.log();
y.log();
z.log();
const cli = {
    nome: 'Pedro',
    toString() { return this.nome; }
};
cli.log();
//# sourceMappingURL=interfaces.js.map