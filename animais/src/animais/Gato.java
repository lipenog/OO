package animais;

public class Gato extends Animal implements AnimalDeEstimacao{

	public Gato() {
		this("");
	}
	public Gato(String nome) {
		super(nome, 4);
	}
	@Override
	public void comer() {
		// TODO Auto-generated method stub
		System.out.println(nome + " come ração");
		
	}
	@Override
	public void brincar() {
		// TODO Auto-generated method stub
		System.out.println(nome + " brinca com bola de meias");
	}
}
