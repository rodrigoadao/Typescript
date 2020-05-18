// string

let nome: string = 'João'
console.log(nome)
// nome = 28

//numbers
let idade: number = 27
// idade = 'Ana'
idade = 27.5
console.log(idade)

//boolean
let possuirHobbies: boolean = true
// possuirHobbies =  1
console.log(possuirHobbies) 

// tipos explicitos
let minhaIdade: number
minhaIdade = 27
console.log(typeof minhaIdade)
// minhaIdade = 'Idade 27'
// console.log(typeof minhaIdade)

//array
let hobbies: any[] = ["Cozinha","Praticcar Esportes"]
console.log(hobbies[0])
console.log(typeof hobbies)

hobbies = [100]
// hobbies = 100
console.log(hobbies)

//tuplas
let endereco: [string, number] = ["Av Principal", 99]
console.log(endereco)

endereco = ["Rua Imporante",1260]

enum Cor{
    Cinza,
    Verde,
    Azul
}

let minhaCor: Cor = Cor.Verde
console.log(minhaCor)


// any
let carro: any = 'BMW'
console.log(carro)
carro = { marca: 'BMW', ano: 2019 }
console.log(carro)

// funções
function retornaMeuNome(): string {
    return nome
}

console.log(retornaMeuNome())

function digaOi(): void {
    console.log('oi')
}

digaOi()

function multiplicar(numA: number, numB: number): number{
    return numA * numB
}

console.log(multiplicar(2 , 9))

const teste = function (a: number, b: number): boolean {
    return false
}

// tipo função
let calculo: (numA: number, numB: number) => number
calculo = multiplicar
console.log(calculo(5,10))

// objetos
let usuario: { nome: string, idade: number } = {
    nome: 'João',
    idade: 27
}

let funcionario: { nome: string, supervisores: string[], baterPonto: ( a: number ) => string };

funcionario = {
    nome: 'Rodrigo',
    supervisores: ['André', 'Eduardo'],
    baterPonto: function(hora: number){
                    if(hora <= 8){
                        return 'Ponto normal (<= 8)'
                    }else{
                        return 'Fora do horário ( > 8 )'
                    }
                }
}

console.log(funcionario.nome)
console.log(funcionario.supervisores)
console.log(funcionario.baterPonto(7))

// Union Types
let nota: number | string
nota = 10
console.log(`Minha nota é ${nota}!`)
nota = '10'
console.log(`Minha nota é ${nota}!`)


// never
function falha(msg: string): never {
    //throw new Error(msg)
}

const porduto = {
    nome: 'Sabão',
    preco: -1,
    validarProduto(){
        if(this.nome.trim().length == 0){
            falha('Precisa ter um nome')
        }
        if(this.preco <= 0){
            falha('Preço inválido')
        }
    }
}

porduto.validarProduto()

//Null

let altura = 12
// altura = null

// Converter codigo para TS
let alturaOpcional: null | number = 12
alturaOpcional = null


type ContaBancaria = { 
    saldo: number,
    depositar: (valor : number) => void 
}
let contaBancaria: ContaBancaria = {
    saldo: 3456,
    depositar(valor) {
        this.saldo += valor
    }
}
 
type Correntista = {nome: string, contaBancaria: { saldo: number, depositar: (valor : number) => void  }, contatos: [string,string]}

let correntista: Correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
}
 
correntista.contaBancaria.depositar(3000)
console.log(correntista)