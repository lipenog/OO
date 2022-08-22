const Banco = require("./Banco");
const ContaCorrente = require("./ContaCorrente");
const ContaPoupanca = require("./ContaPoupanca");

module.exports = class Relatorio {
  geraRelatorio() {
    const banco = new Banco();

    const formatadorMonetario = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    console.log("\n\t\t\tRELATÓRIO DE CLIENTES");
    console.log("\t\t\t========================");
    for (
      var indiceCliente = 0;
      indiceCliente < banco.getNumeroDeClientes();
      indiceCliente++
    ) {
      const cliente = banco.getCliente(indiceCliente);

      console.log(
        "Cliente: " + cliente.getNome() + ", " + cliente.getSobrenome()
      );

      for (
        var indiceConta = 0;
        indiceConta < cliente.getNumeroDeContas();
        indiceConta++
      ) {
        const conta = cliente.getConta(indiceConta);
        var tipoConta = "";

        // Determina o tipo de conta
        if (conta instanceof ContaPoupanca) {
          tipoConta = "Conta Poupanca";
          var isContaCorrente = false;
        } else if (conta instanceof ContaCorrente) {
          tipoConta = "Conta Corrente";
          var isContaCorrente = true;
        } else {
          tipoConta = "Tipo desconhecido de conta";
        }

        // Exibe os saldos da conta
        /** Exercício: Complete a lacuna para formatar a saída para exibir o padrão monetário brasileiro (R$)
         * sem explicitamente inclur R$ na instrução System.out.println() ***/
        console.log(
          "    " +
            tipoConta +
            ": Saldo atual de " +
            formatadorMonetario.format(conta.getSaldo()) +
            ". "
        );
        if (isContaCorrente) {
          const contaCorrente = conta;
          console.log(
            "\tCheque especial de " +
              formatadorMonetario.format(contaCorrente.getChequeEspecial())
          );
        }
      }
    }
  }
};
