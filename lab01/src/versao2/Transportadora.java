package versao2;

public class Transportadora {
	public static void main(String[] args) {
		Veiculo V1 = new Veiculo(10000.00);
		System.out.println("Adicionando caixa 1 (500kg) : " +  V1.adicionarCaixa(500));
		System.out.println("Adicionando caixa 2 (250kg) : " +  V1.adicionarCaixa(250));
		System.out.println("Adicionando caixa 3 (5000kg) : " +  V1.adicionarCaixa(5000));
		System.out.println("Adicionando caixa 4 (4000kg) : " +  V1.adicionarCaixa(4000));
		System.out.println("Adicionando caixa 5 (300kg) : " +  V1.adicionarCaixa(300));
		System.out.println("A Carga do veiculo é: " + V1.getCarga() + "Kg");
	}
}
