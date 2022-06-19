package lab;

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
        double tmp = saldo + chequeEspecial - valor;
        if (tmp >= 0)
        {
            saldo = tmp;
            return true;
        } else {
            return false;
        }
    }
}
