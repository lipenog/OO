package banco;

public class Conta {
	private double saldo = 0;
	
	public Conta(double saldoInicial) {
		this.saldo = saldoInicial;
	}

	public double getSaldo() {
		return saldo;
	}
	
	public void depositar(double valor) {
		this.saldo += valor;
	}
	public void sacar(double valor) {
		this.saldo -= valor;
	}
}
