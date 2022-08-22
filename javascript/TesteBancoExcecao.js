const Banco = require("./Banco");
const Cliente = require("./Cliente");
const ContaCorrente = require("./ContaCorrente");

const banco = new Banco();

// Cria dois clientes e suas respectivas contas
const brunoHenrique = new Cliente("Bruno", "Henrique");
banco.adicionarCliente(brunoHenrique);
brunoHenrique.adicionarConta(new ContaCorrente(220000.0, 40000.0));

const gabrielBarbosa = new Cliente("Gabriel", "Barbosa");
banco.adicionarCliente(gabrielBarbosa);
gabrielBarbosa.adicionarConta(new ContaCorrente(30000));

console.log("------------------ RELATÓRIO DE TRANSAÇÕES -------------------\n");

// Testando uma conta poupança
console.log("Recuperando o cliente Bruno Henrique");
var conta = brunoHenrique.getConta(0);
// Executa algumas transações na conta
try {
  console.log("Sacando R$ 1.200,00");
  conta.sacar(1200);
  console.log("Depositando R$ 8.525,00");
  conta.depositar(8525);
  console.log("Sacando R$ 300.000,00");
  conta.sacar(300000);
  console.log("Sacando R$ 50.000,00: ");
  conta.sacar(50000);
} catch (e1) {
  console.log("Exceção: " + e1.getMessage() + "   Déficit: " + e1.getDeficit());
} finally {
  console.log(
    "Cliente [" +
      brunoHenrique.getNome() +
      ", " +
      brunoHenrique.getSobrenome() +
      "]" +
      " Tem um saldo em conta corrente de " +
      conta.getSaldo()
  );
}

console.log("Recuperando o cliente Gabriel Barbosa");
conta = gabrielBarbosa.getConta(0);
// Executa algumas transações
try {
  console.log("Saque de R$ 15500.00");
  conta.sacar(15500.0);
  console.log("deposito de R$ 3000.00");
  conta.depositar(3000);
  console.log("Saque de R$ 18000.00");
  conta.sacar(18000.0);
} catch (e1) {
  console.log("Exceção: " + e1.getMessage() + "   Déficit: " + e1.getDeficit());
} finally {
  console.log(
    "Cliente [" +
      gabrielBarbosa.getNome() +
      ", " +
      gabrielBarbosa.getSobrenome() +
      "]" +
      " Tem um saldo dem conta corrente de " +
      conta.getSaldo()
  );
}
