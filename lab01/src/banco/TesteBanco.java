package banco;

public class TesteBanco {
	public static void main(String[] args) {
		Conta c1 = new Conta(1000);
		System.out.println("Criando uma conta com saldo de 1000,00");
		c1.sacar(250);
		c1.depositar(320.50);
		c1.sacar(120);
		System.out.println("Sacando 250,00");
		System.out.println("Depositando 320,50");
		System.out.println("Sacando 120");
		System.out.println("O saldo da conta é: " + c1.getSaldo());
	}
}
