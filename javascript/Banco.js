module.exports = class Banco {
  constructor() {
    if (!Banco.instance) {
      this.clientes = [];
      Banco.instance = this;
    }
    return Banco.instance;
  }
  adicionarCliente(cliente) {
    this.clientes.push(cliente);
  }
  getCliente(indice) {
    return this.clientes[indice];
  }
  getNumeroDeClientes() {
    return this.clientes.length;
  }
  getClientes(nome, sobrenome) {
    var resultado = [];
    this.clientes.forEach((element) => {
      if (element.nome === nome && element.sobrenome === sobrenome) {
        resultado.push(cliente);
      }
    });
    return resultado;
  }
};
