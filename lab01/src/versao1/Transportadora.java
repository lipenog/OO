package versao1;

public class Transportadora {
	public static void main(String[] args) {
		Veiculo V1 = new Veiculo(10000.00);
		V1.carga = 500;
		V1.carga += 250;
		V1.carga += 5000;
		V1.carga += 4000;
		V1.carga += 300;
		System.out.println("A Carga do veiculo é: " + V1.getCarga() + "Kg");
	}
}
