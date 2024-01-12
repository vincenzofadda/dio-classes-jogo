class Personagem {
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        this.ataques = {
            "mago" : "magia",
            "guerreiro": "espada",
            "monge": "artes marciais",
            "ninja": "shuriken"
        }
    }
    atacar(){
        const ataque = this.ataques[this.tipo] || "ataque indefinido"
        console.log(`O ${this.tipo} atacou usando ${ataque}`)
    }
}

let guerreiro = new Personagem("Vincenzo", 22, "guerreiro")
guerreiro.atacar()

let mago = new Personagem("Vincenzo", 22, "mago")
mago.atacar()