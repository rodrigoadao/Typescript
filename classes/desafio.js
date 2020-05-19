"use strict";
// Exercício 1 - Classe
class Moto {
    constructor(nome, _velocidade = 0) {
        this.nome = nome;
        this._velocidade = _velocidade;
        this.nome = nome;
        this._velocidade = 0;
    }
    buzinar() {
        console.log('Toooooooooot!');
    }
    acelerar(delta) {
        this._velocidade = this._velocidade + delta;
    }
    get velocidade() {
        return this._velocidade;
    }
}
const moto1 = new Moto('Ducati');
moto1.buzinar();
console.log(moto1.velocidade);
moto1.acelerar(30);
console.log(moto1.velocidade);
// Exercício 2 - Herança
class objeto2D {
    constructor(_base, _altura) {
        this._base = _base;
        this._altura = _altura;
        this._base = _base;
        this._altura = _altura;
    }
    area() {
        return this._base * this._altura;
    }
}
var retangulo = new objeto2D(5, 10);
console.log(retangulo.area());
// Exercício 3 - Getters & Setters
class Estagiario {
    constructor(_name = 'null') {
        this._name = _name;
    }
    set name(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
}
const estagiario1 = new Estagiario();
console.log(estagiario1.name);
estagiario1.name = 'Le';
console.log(estagiario1.name);
estagiario1.name = 'Leonardo';
console.log(estagiario1.name);
//# sourceMappingURL=desafio.js.map