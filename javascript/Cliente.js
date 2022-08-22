module.exports = class Cliente {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.contas = [];
  }
  getNome() {
    return this.nome;
  }
  setNome(nome) {
    this.nome = nome;
  }
  getSobrenome() {
    return this.sobrenome;
  }
  setSobrenome(sobrenome) {
    this.sobrenome = sobrenome;
  }
  getConta(indice) {
    return this.contas[indice];
  }
  getNumeroDeContas() {
    return this.contas.length;
  }
  adicionarConta(conta) {
    this.contas.push(conta);
  }
};
