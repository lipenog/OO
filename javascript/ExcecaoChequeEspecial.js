module.exports = class ExcecaoChequeEspecial {
  constructor(mensagem, deficit) {
    this.mensagem = mensagem;
    this.deficit = deficit;
  }

  getDeficit() {
    return this.deficit;
  }

  getMessage() {
    return this.mensagem;
  }
};
