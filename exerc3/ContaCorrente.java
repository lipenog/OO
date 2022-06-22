package exerc3;

public class ContaCorrente extends Conta {
    private ContaPoupanca protecaoContaPoupanca = null;

    public ContaCorrente(double saldoInicial, ContaPoupanca protecao)
    {
        super(saldoInicial);
        this.protecaoContaPoupanca = protecao;
    }
    public ContaCorrente(double saldoInicial)
    {
        super(saldoInicial);
    }
	public boolean sacar(double valor)
    {
        double tmp = saldo - valor;
        if (tmp >= 0)
        {
            saldo = tmp;
            return true;
        } else if (protecaoContaPoupanca != null){
            double aux = valor - saldo;
        	if (protecaoContaPoupanca.sacar(aux)) {
        		saldo = 0;
        		return true;
        	} 
        	return false;
        } else {
        	return false;
        }
    }
	public ContaPoupanca getProtecaoContaPoupanca() {
		return protecaoContaPoupanca;
	}
	public void setProtecaoContaPoupanca(ContaPoupanca protecaoContaPoupanca) {
		this.protecaoContaPoupanca = protecaoContaPoupanca;
	}
}