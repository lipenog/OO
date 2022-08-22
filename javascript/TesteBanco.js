const Banco = require("./Banco");
const Cliente = require("./Cliente");
const ContaCorrente = require("./ContaCorrente");
const ContaPoupanca = require("./ContaPoupanca");
const Relatorio = require("./relatorio");

const banco = new Banco();

console.log("Criando uma conta corrente para o cliente Bruno Henrique.");

const brunoHenrique = new Cliente("Bruno", "Henrique");
banco.adicionarCliente(brunoHenrique);
cliente = banco.getCliente(0);
cliente.adicionarConta(new ContaPoupanca(50000.0, 0.03));
cliente.adicionarConta(new ContaCorrente(220000.0, 40000.0));

console.log("Criando uma conta corrente para o cliente Everton Ribeiro");

const evertonRibeiro = new Cliente("Everton", "Ribeiro");
const contaER = new ContaCorrente(45000, 30000.0);
evertonRibeiro.adicionarConta(contaER);
banco.adicionarCliente(evertonRibeiro);

console.log("Criando uma conta corrente para o cliente Filipe Luis.");

const filipeLuis = new Cliente("Filipe", "Luis");
const contaFilipeLuis = new ContaCorrente(70000);
filipeLuis.adicionarConta(contaFilipeLuis);
banco.adicionarCliente(filipeLuis);

console.log("Criando uma conta corrente para o cliente Gabriel Barbosa.");

const gabrielBarbosa = new Cliente("Gabriel", "Barbosa");
banco.adicionarCliente(gabrielBarbosa);
cliente = banco.getCliente(2);
cliente.adicionarConta(new ContaPoupanca(220000.0, 0.03));

console.log("Criando uma conta corrente para o cliente Diego Alves.");

const diegoAlves = new Cliente("Diego", "Alves");
const contaDA = new ContaCorrente(50000);
diegoAlves.adicionarConta(contaDA);
banco.adicionarCliente(diegoAlves);

console.log(
  "Diego Alves autorizou o cadastro de sua conta corrente como sendo conjunta com a cliente Lorena Lara."
);

const lorenaLara = new Cliente("Lorena", "Lara");
lorenaLara.adicionarConta(contaDA);
banco.adicionarCliente(lorenaLara);

const relatorio = new Relatorio();
relatorio.geraRelatorio();
