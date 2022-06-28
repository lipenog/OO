package animais;

public abstract class Animal {
	protected String nome;
	protected int numeroDePernas;
	
	protected Animal(String nome, int numeroDePernas) {
		this.nome = nome;
		this.numeroDePernas = numeroDePernas;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public int getNumeroDePernas() {
		return numeroDePernas;
	}

	public void setNumeroDePernas(int numeroDePernas) {
		this.numeroDePernas = numeroDePernas;
	}
	public void caminhar() {
		if (numeroDePernas > 0) {
			System.out.println(nome + " anda com " + numeroDePernas + " pernas");	
		} else {
			System.out.println(nome + " não anda, nada");
		}
		
	}
	public abstract void comer();
}
