class Cliente {
    constructor(nome,sobrenome){
        this.nome = nome
        this.sobrenome = sobrenome
        this.contas = []
    }
    conta (indice) {
        return this.contas.find(indice)
    }
    numeroContas(){
        return this.contas.length()
    }
    adicionarConta(conta){
        this.contas.push(conta)
    }
}

const pessoa = new Cliente("ygão", "tonelada")

console.log(pessoa.nome)