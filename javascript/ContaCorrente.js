const Conta = require("./Conta");
const ExcecaoChequeEspecial = require("./ExcecaoChequeEspecial");

module.exports = class ContaCorrente extends Conta {
  constructor(saldo, cheque) {
    super(saldo);
    if (cheque) {
      this.chequeEspecial = cheque;
    } else {
      this.chequeEspecial = 0;
    }
  }
  sacar(valor) {
    if (this.saldo + this.chequeEspecial >= valor) {
      this.saldo -= valor;
    } else {
      if (this.chequeEspecial == 0) {
        throw new ExcecaoChequeEspecial(
          "não ha cheque especial",
          valor - this.saldo
        );
      } else {
        throw new ExcecaoChequeEspecial(
          "saldo insuficiente",
          valor - this.saldo
        );
      }
    }
  }
  getChequeEspecial() {
    return this.chequeEspecial;
  }
  setChequeEspecial(cheque) {
    this.chequeEspecial = cheque;
  }
};
