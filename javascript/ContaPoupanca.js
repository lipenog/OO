const Conta = require("./Conta");

module.exports = class ContaPoupanca extends Conta {
  constructor(saldo, taxa) {
    super(saldo);
    this.taxaRendimento = taxa;
  }
};
