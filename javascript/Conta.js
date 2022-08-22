module.exports = class Conta {
  constructor(saldo) {
    this.saldo = saldo;
  }
  getSaldo() {
    return this.saldo;
  }
  depositar(valor) {
    this.saldo = this.saldo + valor;
    return true;
  }
  sacar(valor) {
    if (this.saldo - valor >= 0) {
      this.saldo = this.saldo - valor;
    } else {
      throw new ExcecaoChequeEspecial("saldo insuficiente", valor - this.saldo);
    }
  }
};
