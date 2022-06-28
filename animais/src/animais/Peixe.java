package animais;

public class Peixe extends Animal implements AnimalDeEstimacao {
	public Peixe(String nome) {
		super(nome, 0);
	}

	@Override
	public void comer() {
		// TODO Auto-generated method stub
		System.out.println(nome + " come minhocas");
	}

	@Override
	public void brincar() {
		// TODO Auto-generated method stub
		System.out.println(nome + " brinca com anzol");
	}
}
