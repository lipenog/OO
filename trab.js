class Banco {
    // e o singleton
    constructor(){
        this.clientes = []
    }
    adicionarCliente(cliente){
        this.clientes.push(cliente)
    }
    getCliente(indice){
        return this.clientes[indice]
    }
    getNumeroDeClientes(){
        return this.clientes.length
    }
}

class Cliente {
    constructor(nome,sobrenome){
        this.nome = nome
        this.sobrenome = sobrenome
        this.contas = []
    }
    getNome(){
        return this.nome
    }
    setNome(nome){
        this.nome = nome
    }
    getSobrenome(){
        return this.sobrenome
    }
    setSobrenome(sobrenome){
        this.sobrenome = sobrenome
    }
    getConta (indice) {
        return this.contas[indice]
    }
    getNumeroDeContas(){
        return this.contas.length
    }
    adicionarConta(conta){
        this.contas.push(conta)
    }
}

class Conta{
    constructor (saldo){
        this.saldo = saldo
    }
    getSaldo(){
        return this.saldo
    }
    depositar(valor){
        this.saldo = this.saldo + valor
        return true
    }
    sacar(valor){
        if((this.saldo - valor) >= 0){
            this.saldo = this.saldo - valor
        } else {
            throw new ExcecaoChequeEspecial("saldo insuficiente", valor - this.saldo)
        }
    } 
}

class ContaCorrente extends Conta{
    constructor(saldo,cheque){
        super(saldo)
        this.chequeEspecial = cheque
    }
    // não pode ter mais de um construtor
    //constructor(saldo){
    //    super(saldo)
    //}
    sacar(valor){
        if(this.saldo + this.chequeEspecial >= valor){
            this.saldo -= valor
        } else {
            if(this.chequeEspecial == 0){
                throw new ExcecaoChequeEspecial("não ha cheque especial", valor - this.saldo)
            } else {
                throw new ExcecaoChequeEspecial("saldo insuficiente", valor - this.saldo)
            }
        }
    }
    getChequeEspecial(){
        return this.chequeEspecial
    }
    setChequeEspecial(cheque){
        this.chequeEspecial = cheque
    }
}

class ContaPoupanca extends Conta{
    constructor(saldo,taxa){
        super(saldo)
        this.taxaRendimento = taxa
    }
}

class ExcecaoChequeEspecial{
    constructor(mensagem, deficit){
        this.mensagem = mensagem
        this.deficit = deficit
    }

    getDeficit(){
        return this.deficit
    }
}

 class Relatorio{
    geraRelatorio(banco){

    const formatadorMonetario = new Intl.NumberFormat('pt-BR',{ style: 'currency', currency: 'BRL' })

        console.log("\n\t\t\tRELATÓRIO DE CLIENTES")
        console.log("\t\t\t========================")
        console.log(banco.getNumeroDeClientes())
        for (var indiceCliente = 0; indiceCliente < banco.getNumeroDeClientes(); indiceCliente++) {
            const cliente = banco.getCliente(indiceCliente);

            console.log("Cliente: " + cliente.getNome() + ", " + cliente.getSobrenome());

            for (var indiceConta = 0; indiceConta < cliente.getNumeroDeContas(); indiceConta++) {
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
                console.log("    " + tipoConta + ": Saldo atual de " + formatadorMonetario.format(conta.getSaldo()) + ". ");
                if (isContaCorrente) {
                    const contaCorrente = conta;
                    console.log("\tCheque especial de " +
                            (formatadorMonetario.format(contaCorrente.getChequeEspecial())));
                }
            }
         }
    }
}

const banco = new Banco()

console.log("Criando uma conta corrente para o cliente Bruno Henrique.")

const brunoHenrique = new Cliente("Bruno", "Henrique");
banco.adicionarCliente(brunoHenrique);
cliente = banco.getCliente(0);
console.log(cliente)
cliente.adicionarConta(new ContaPoupanca(50000.00, 0.03));
cliente.adicionarConta(new ContaCorrente(220000.00, 40000.00));

console.log("Criando uma conta corrente para o cliente Everton Ribeiro")

const evertonRibeiro = new Cliente("Everton", "Ribeiro");
const contaER = new ContaCorrente(45000, 30000.00);
evertonRibeiro.adicionarConta(contaER);
banco.adicionarCliente(evertonRibeiro);

console.log("Criando uma conta corrente para o cliente Filipe Luis.")

const filipeLuis = new Cliente("Filipe", "Luis");
const contaFilipeLuis = new ContaCorrente(70000);
filipeLuis.adicionarConta(contaFilipeLuis);
banco.adicionarCliente(filipeLuis);

console.log("Criando uma conta corrente para o cliente Gabriel Barbosa.");

const gabrielBarbosa = new Cliente("Gabriel", "Barbosa");
banco.adicionarCliente(gabrielBarbosa);
cliente = banco.getCliente(2);
cliente.adicionarConta(new ContaPoupanca(220000.00, 0.03));

console.log("Criando uma conta corrente para o cliente Diego Alves.")

const diegoAlves = new Cliente("Diego", "Alves");
const contaDA = new ContaCorrente(50000);
diegoAlves.adicionarConta(contaDA);
banco.adicionarCliente(diegoAlves);

console.log("Diego Alves autorizou o cadastro de sua conta corrente como sendo conjunta com a cliente Lorena Lara.")

const lorenaLara = new Cliente("Lorena", "Lara");
lorenaLara.adicionarConta(contaDA);
banco.adicionarCliente(lorenaLara);


const relatorio = new Relatorio()
relatorio.geraRelatorio(banco)
