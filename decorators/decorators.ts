


function logarClasse(construtor: Construtor){
    console.log(construtor)
}


function logarClasseSe(valor: boolean){
    return valor ? logarClasse : null
}

function decorator(obj: {a: string, b: number}){
    return function(_:Function): void {
        console.log(obj.a + ' ' + obj.b)
    }
}

// @logarClasse(true)


type Construtor = {new(...args: any[]): {}}

function logarObjeto(construtor: Construtor){
    console.log('Carregado...')
    return class extends construtor {
        constructor(...args: any[]){
            console.log('Antes.....')
            super(...args)
            console.log('Depois...')
        }
    }
}

// new Eletrodomestico()
// new Eletrodomestico()
// new Eletrodomestico()

//@logarClasse
// @logarClasseSe(true)
// @decorator({a: 'Teste',b: 123})
// @logarObjeto
interface Eletrodomestico{
    imprimir(): void
}

@imprimivel
class Eletrodomestico {
    constructor(){
        console.log('novo........')
    }
}

function imprimivel(constructor: Function) {
    constructor.prototype.imprimir = function(){
        console.log(this)
    }
}

const eletro = new Eletrodomestico()
eletro.imprimir && eletro.imprimir()


const usuarioLogado = {
    nome: 'Rodrigo Santos',
    email: 'rodrigosantos@gmail.com',
    admin: true
}

@perfilAdmin
class MudancaAdministrativa{
    critico(){
        console.log('Algo critico foi alterado!')
    }
}

new MudancaAdministrativa().critico()

function perfilAdmin<T extends Construtor>(construtor: T){
    return class extends construtor {
        constructor(...args: any[]){
            super(...args)
            if(!usuarioLogado || !usuarioLogado.admin){
                throw new Error('Sem permissão!')
            }
        }
    }
}

class ContaCorrente {
    @naoNegativo
    private saldo: number

    constructor(saldo: number){
        this.saldo = saldo
    }

    @congelar
    sacar(@paramInfo valor: number){
            this.saldo -= valor
    }

    @congelar
    getSaldo(){
        return this.saldo
    }
}


const cc = new ContaCorrente(10000)
cc.sacar(5000)
console.log(cc.getSaldo())

// Object.freeze()
function congelar(alvo: any, nomePropriedade: string, descritor: PropertyDescriptor){
    console.log('teste1' + alvo)
    console.log('teste2' + nomePropriedade)
    descritor.writable = false
}


function naoNegativo(alvo: any, nomePropriedade: string){
    delete alvo[nomePropriedade]
    Object.defineProperty(alvo, nomePropriedade, {
        get: function(): any {
            return alvo["_" + nomePropriedade]
        },
        set: function(valor: any): void {
            if(valor < 0){
                throw new Error('Saldo Invalido')
            }else{
                alvo["_" + nomePropriedade] = valor
            }
        }
    })
}


function paramInfo(alvo: any, nomeMetodo: string, indiceParam: number){
    console.log(`Alvo: ${alvo}`)
    console.log(`Método ${nomeMetodo}`)
    console.log(`Indice ${indiceParam}`)
}