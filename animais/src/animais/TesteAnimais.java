package animais;

public class TesteAnimais {
	public static void main (String[] args) {
		Peixe p = new Peixe("Nemo");
		Gato g = new Gato("Tom");
		Animal a = new Peixe("Peixoto");
		Animal ab = new Aranha("Aracnilda");
		AnimalDeEstimacao ae = new Gato("Pudim");
		
		Animal animais[] = new Animal[5];
		animais[0] = p;
		animais[1] = g;
		animais[2] = a;
		animais[3] = ab;
		animais[4] = (Animal) ae;
		
		for (Animal x: animais) {
			relatorioAnimais(x);
		}
	}
	
	public static void relatorioAnimais(Animal x) {
		String tipo;
		if (x instanceof Aranha) {
			tipo = "Aranha";
		} else if (x instanceof Peixe) {
			tipo = "Peixe";
		} else if (x instanceof Gato) {
			tipo = "Gato";
		} else {
			tipo = "Animal";
		}
		System.out.println("-------------------------");
		System.out.print(tipo+" ");
		x.caminhar();
		if (x instanceof Peixe) {
			Peixe b = (Peixe)x;
			b.brincar();
		}
		if (x instanceof Gato) {
			Gato b = (Gato)x;
			b.brincar();
		}
		x.comer();
		System.out.println("-------------------------");
	}
}
