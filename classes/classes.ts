class Data {
    // Público por padrão
    public dia: number
    mes: number
    ano: number

    constructor(dia: number = 1, mes: number = 1, ano: number = 1970){
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }

}

const aniversario = new Data(3,11,1991)
console.log(aniversario)

const casamento = new Data // É possivel emitir os "()"


class DataEsperta {
    constructor(
                public dia: number = 1, 
                public mes: number = 1,
                public ano: number = 1970){
    }
}

const aniversarioEsperto = new DataEsperta(3,11,1991)
console.log(aniversario)

const casamentoEsperto = new DataEsperta // É possivel emitir os "()"


class Produto {
    constructor(
                public nome: string,
                public preco: number,
                public desconto: number = 0){
    }

    public resumo(): string{
        return `${this.nome} custa R$${this.preco} (${this.desconto * 100}% OFF)`
    }
    public calcularDesconto(): number{
        return this.preco * (1 - this.desconto)
    }
}

const bicicleta = new Produto('Bicicleta',600.00)
const moto = new Produto('XT660',32000,0.1)

moto.calcularDesconto()
console.log(moto.resumo())

console.log(bicicleta)

class Carro {
    private velocidadeAtual: number = 0

    constructor(
                public marca:string,
                public modelo: string,
                private velocidadeMaxima: number = 200){
    }

    protected alterarVelocidade(delta: number): number {
        const novaVelocidade = this.velocidadeAtual + delta
        const velocidadeValida = novaVelocidade >= 0
            && novaVelocidade <= this.velocidadeMaxima
        if(velocidadeValida){
            this.velocidadeAtual = novaVelocidade
        }else{
            this.velocidadeAtual - delta > 0 ? this.velocidadeMaxima : 0
        }

        return this.velocidadeAtual
    }

    public acelerar(): number{
        return this.alterarVelocidade(5)
    }

    public frear(): number{
        return this.alterarVelocidade(-5)
    }
}

const carro1 = new Carro('Ford', 'Ka', 180)

Array(50).fill(0).forEach(() => carro1.acelerar())
console.log(carro1.acelerar())


class Ferrari extends Carro {
    constructor(modelo: string, velocidadeMaxima: number){
        super('Ferrari', modelo, velocidadeMaxima)
    }
    public acelerar(): number{
        return this.alterarVelocidade(20)
    }

    public frear(): number{
        return this.alterarVelocidade(-15)
    }
}

const f40 = new Ferrari('F40',324)



// Getters & Setters
class Pessoa {
    private _idade: number = 0

    get idade(): number{
        return this._idade
    }

    set idade(valor : number){
        if(valor >= 0 && valor <= 100){
            this._idade = valor
        }
    }
}

const pessoa2 = new Pessoa()
pessoa2.idade = 10
console.log(pessoa2.idade)


class Matematica {
    static PI: number = 3.1416

    static areaCirc(raio: number): number{
        return Matematica.PI * raio * raio
    }
}

// const ciruclo1 = new Matematica()
// console.log(ciruclo1.areaCirc(10))
console.log(Matematica.areaCirc(4))

abstract class Calculo{
    protected resultado: number = 0

    abstract executar(...numeros: number[]): void
    
    getResultado(): number{
        return this.resultado
    }
}

class Soma extends Calculo {
    executar(...numeros: number[]): void{
        this.resultado = numeros.reduce((t,a) => t + a)
    }
}


let soma1 = new Soma()

soma1.executar(2,3,4,5)
console.log(soma1.getResultado())

class Unico{
    private static instance: Unico = new Unico
    private constructor(){

    }

    static getInstace(): Unico{
        return Unico.instance
    }

    agora(){
        return new Date
    }
}