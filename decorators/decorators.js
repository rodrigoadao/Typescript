"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function logarClasse(construtor) {
    console.log(construtor);
}
function logarClasseSe(valor) {
    return valor ? logarClasse : null;
}
function decorator(obj) {
    return function (_) {
        console.log(obj.a + ' ' + obj.b);
    };
}
function logarObjeto(construtor) {
    console.log('Carregado...');
    return class extends construtor {
        constructor(...args) {
            console.log('Antes.....');
            super(...args);
            console.log('Depois...');
        }
    };
}
let Eletrodomestico = /** @class */ (() => {
    let Eletrodomestico = class Eletrodomestico {
        constructor() {
            console.log('novo........');
        }
    };
    Eletrodomestico = __decorate([
        imprimivel
    ], Eletrodomestico);
    return Eletrodomestico;
})();
function imprimivel(constructor) {
    constructor.prototype.imprimir = function () {
        console.log(this);
    };
}
const eletro = new Eletrodomestico();
eletro.imprimir && eletro.imprimir();
const usuarioLogado = {
    nome: 'Rodrigo Santos',
    email: 'rodrigosantos@gmail.com',
    admin: true
};
let MudancaAdministrativa = /** @class */ (() => {
    let MudancaAdministrativa = class MudancaAdministrativa {
        critico() {
            console.log('Algo critico foi alterado!');
        }
    };
    MudancaAdministrativa = __decorate([
        perfilAdmin
    ], MudancaAdministrativa);
    return MudancaAdministrativa;
})();
new MudancaAdministrativa().critico();
function perfilAdmin(construtor) {
    return class extends construtor {
        constructor(...args) {
            super(...args);
            if (!usuarioLogado || !usuarioLogado.admin) {
                throw new Error('Sem permissão!');
            }
        }
    };
}
let ContaCorrente = /** @class */ (() => {
    class ContaCorrente {
        constructor(saldo) {
            this.saldo = saldo;
        }
        sacar(valor) {
            this.saldo -= valor;
        }
        getSaldo() {
            return this.saldo;
        }
    }
    __decorate([
        naoNegativo
    ], ContaCorrente.prototype, "saldo", void 0);
    __decorate([
        congelar,
        __param(0, paramInfo)
    ], ContaCorrente.prototype, "sacar", null);
    __decorate([
        congelar
    ], ContaCorrente.prototype, "getSaldo", null);
    return ContaCorrente;
})();
const cc = new ContaCorrente(10000);
cc.sacar(5000);
console.log(cc.getSaldo());
// Object.freeze()
function congelar(alvo, nomePropriedade, descritor) {
    console.log('teste1' + alvo);
    console.log('teste2' + nomePropriedade);
    descritor.writable = false;
}
function naoNegativo(alvo, nomePropriedade) {
    delete alvo[nomePropriedade];
    Object.defineProperty(alvo, nomePropriedade, {
        get: function () {
            return alvo["_" + nomePropriedade];
        },
        set: function (valor) {
            if (valor < 0) {
                throw new Error('Saldo Invalido');
            }
            else {
                alvo["_" + nomePropriedade] = valor;
            }
        }
    });
}
function paramInfo(alvo, nomeMetodo, indiceParam) {
    console.log(`Alvo: ${alvo}`);
    console.log(`Método ${nomeMetodo}`);
    console.log(`Indice ${indiceParam}`);
}
//# sourceMappingURL=decorators.js.map