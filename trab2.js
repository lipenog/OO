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
        if(cheque){
            this.chequeEspecial = cheque            
        } else {
            this.chequeEspecial = 0
        }
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
    
    getMessage(){
        return this.mensagem
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

        const banco = new Banco();

        // Cria dois clientes e suas respectivas contas
        const brunoHenrique = new Cliente("Bruno", "Henrique");
        banco.adicionarCliente(brunoHenrique);
        brunoHenrique.adicionarConta(new ContaCorrente(220000.00, 40000.00));

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
            console.log("Exceção: " + e1.getMessage()
                    + "   Déficit: " + e1.getDeficit());
        } finally {
            console.log("Cliente [" + brunoHenrique.getNome()
                    + ", " + brunoHenrique.getSobrenome() + "]"
                    + " Tem um saldo em conta corrente de "
                    + conta.getSaldo());
        }


        console.log("Recuperando o cliente Gabriel Barbosa");
        conta = gabrielBarbosa.getConta(0);
        // Executa algumas transações
        try {
            console.log("Saque de R$ 15500.00");
            conta.sacar(15500.00);
            console.log("deposito de R$ 3000.00");
            conta.depositar(3000);
            console.log("Saque de R$ 18000.00");
            conta.sacar(18000.00);

        } catch (e1) {
            console.log("Exceção: " + e1.getMessage()
                    + "   Déficit: " + e1.getDeficit());
        } finally {
            console.log("Cliente [" + gabrielBarbosa.getNome()
                    + ", " + gabrielBarbosa.getSobrenome() + "]"
                    + " Tem um saldo dem conta corrente de "
                    + conta.getSaldo());
        }
