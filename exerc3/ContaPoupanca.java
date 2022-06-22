package exerc3;

public class ContaPoupanca extends Conta {
    private double taxaRendimento;

    public ContaPoupanca(double saldoInicial, double rendimento)
    {
        super(saldoInicial);
        this.taxaRendimento = rendimento;
    }

    public double getTaxaRendimento()
    {
        return taxaRendimento;
    }
}