package lab;

public class Conta {
    protected double saldo;

    public Conta(double saldoInicial)
    {
        saldo = saldoInicial;
    }

    public double getSaldo()
    {
        return saldo;
    }

    public boolean depositar(double valor)
    {
        double tmp = saldo + valor;
        if (tmp >= 0)
        {
            saldo = tmp;
            return true;
        } else {
            return false;
        }
    }

    public boolean sacar(double valor)
    {
        double tmp = saldo - valor;
        if (tmp >= 0)
        {
            saldo = tmp;
            return true;
        } else {
            return false;
        }
    }
}
