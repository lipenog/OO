package dominio;


public class ContaCorrente extends Conta {
    private double chequeEspecial;

    public ContaCorrente(double saldoInicial, double chequeEspecial)
    {
        super(saldoInicial);
        this.chequeEspecial = chequeEspecial;
    }
    public ContaCorrente(double saldoInicial)
    {
        super(saldoInicial);
    }
	public boolean sacar(double valor)
    {
        double tmp = super.getSaldo() - valor;
        if (tmp >= 0)
        {
            super.sacar(tmp);
            return true;
        } else if (chequeEspecial > super.getSaldo() - valor){
            double aux = super.getSaldo() + chequeEspecial - valor;
        	if (aux >= 0) {
        		super.sacar(super.getSaldo());
        		chequeEspecial = aux;
        		return true;
        	} 
        	return false;
        } else {
        	return false;
        }
    }
	public double getChequeEspecial() {
		return chequeEspecial;
	}
	public void setChequeEspecial(double chequeEspecial) {
		this.chequeEspecial = chequeEspecial;
	}
	
}