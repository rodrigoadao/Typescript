// Exercício 1 - Classe
class Moto{

    constructor(public nome: string, private _velocidade: number = 0 ){
        this.nome = nome
        this._velocidade = 0    
    }

    public buzinar(): void {
        console.log('Toooooooooot!')
    }
 
    public acelerar(delta: number) : void {
        this._velocidade = this._velocidade + delta
    }

    get velocidade(): number{
        return this._velocidade
    }
}
 
const moto1 = new Moto('Ducati')
moto1.buzinar()
console.log(moto1.velocidade)
moto1.acelerar(30)
console.log(moto1.velocidade)

 
// Exercício 2 - Herança
class objeto2D {

    constructor(private _base: number,private _altura: number){
        this._base = _base
        this._altura = _altura
    }

    public area(): number{
        return this._base * this._altura
    }
    
}
 
var retangulo = new objeto2D(5,10)
console.log(retangulo.area())
 
// Exercício 3 - Getters & Setters
class Estagiario {
    constructor(private _name: string = 'null'){}
    set name(name: string){
        this._name = name
    }
    get name(): string{
        return this._name
    }
}

const estagiario1 = new Estagiario()
console.log(estagiario1.name)
estagiario1.name = 'Le'
console.log(estagiario1.name)
estagiario1.name = 'Leonardo'
console.log(estagiario1.name)