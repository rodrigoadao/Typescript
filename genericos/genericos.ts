function echo(objeto: any){
    return objeto
}

console.log(echo('João'))
console.log(echo(10))
console.log(echo({nome:'joao', idade: 27}))


// Generics
function echoMelhorado<T>(objeto: T): T{
    return objeto
}

console.log(echoMelhorado('João').length)
console.log(echoMelhorado<number>(10))
console.log(echoMelhorado({nome:'joao', idade: 27}))


// Generics disponiveis a API
const avaliacoes: Array<number> = [10,9.3,7.7]

// Array
function imprimir<T>(args: T[]){
    args.forEach( elemento => console.log(elemento))
}


imprimir<number>([1,2,3])
imprimir<string>(['1','2','3'])

type Aluno = { nome: string, idade: number}
imprimir<Aluno>([{nome: 'Rodrigo', idade: 22}])

//Tipo Generico

const chamarEcho: <T>(data: T) => T = echoMelhorado

console.log(chamarEcho<string>('Alguma coisa'))


// Class com Generics
abstract class OperacaoBinaria<T,R>{
    constructor(public operando1: T, public operando2: T){}

    abstract executar() : R
}

// console.log(new OperacaoBinaria('Bom ', 'dia').executar())
// console.log(new OperacaoBinaria(3,7).executar())
// console.log(new OperacaoBinaria(3, ' Opa').executar())

class SomaBinaria extends OperacaoBinaria<number, number>{
    executar(): number {
        return this.operando1 + this.operando2
    }
}

console.log(new SomaBinaria(22,48).executar())

class DiferencaEntreDatas extends OperacaoBinaria<Data, string>{
    getTime(data: Data): number{
        let { dia, mes, ano} = data
        return new Date(`${mes}/${dia}/${ano}`).getTime()
    }

    executar(): string{
        const t1 = this.getTime(this.operando1)
        const t2 = this.getTime(this.operando2)
        const diferenca = Math.abs(t1 - t2)
        const dia = 1000 * 60 * 60 * 24
        return `${Math.ceil(diferenca / dia)} dia(s)`
    }
}


const d1 = new Data(1,2,2020)
const d2 = new Data(20,2,2020)

console.log(new DiferencaEntreDatas(d1,d2).executar())

//Desafio Class Fila
// Atributo: fila (Array)
// Métodos: entrar, proximo, imprimir

class Fila<T extends number | string> {
    private fila: Array<T>

    constructor(...args: T[]){
        this.fila = args
    }

    entrar(elemento: T){
        this.fila.push(elemento)
    }

    proximo(): T | string {
        if(this.fila.length >= 0){
            const primeiro = this.fila[0]
            this.fila.splice(0,1)
            return primeiro
        }else{
            return 'Fila nulla'
        }
    }

    imprimir(){
        console.log(this.fila)
    }
}

const fila = new Fila<string>('Gui','Pedro', 'Ana','Lu')

fila.imprimir()
fila.entrar('Rodrigo')
fila.imprimir()
console.log(fila.proximo())
console.log(fila.proximo())
console.log(fila.proximo())

fila.imprimir()




// Desafio Mapa
// Array de Objetos (Chave/Valor) -> itens
// Métodos: obter(Chave), colocar({ C, V })
// limpar(), imprimir()
 
type Par<C , V> = {chave: C, valor: V }
class Mapa<C , V> {    
    itens: Array<Par<C,V>> = new Array<Par<C,V>>()
    
    obter(chave: C): Par<C,V> | null {
        const resultado = this.itens.filter(i => i.chave === chave )
        return resultado ? resultado[0] : null
    }
    colocar(par: Par<C,V>){
        const encontrado = this.obter(par.chave)
        if(encontrado){
            encontrado.valor = par.valor
        }else{
            this.itens.push(par)
        }
    }

    limpar(){
        this.itens = new Array<Par<C,V>>()
    }

    imprimir(){
        console.log(this.itens)
    }






}
const mapa = new Mapa<number, string>()
mapa.colocar({ chave: 1, valor: 'Pedro' })
mapa.colocar({ chave: 2, valor: 'Rebeca' })
mapa.colocar({ chave: 3, valor: 'Maria' })
mapa.colocar({ chave: 1, valor: 'Gustavo' })
 
console.log(mapa.obter(2))
mapa.imprimir()
mapa.limpar()
mapa.imprimir()