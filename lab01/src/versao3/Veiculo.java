package versao3;

public class Veiculo {
	private double carga = 0;
	private double cargaMaxima;
	
	public Veiculo(double cargaMaxima) {
		this.cargaMaxima = cargaMaxima*9.8;
	}
	
	public boolean adicionarCaixa(double peso) {
		double temp = carga + peso*9.8;
		if (temp <= cargaMaxima) {
			this.carga = temp;
			return true;
		} else {
			return false;			
		}
	}
	
	public double getCarga() {
		return carga/9.8;
	}
	public double getCargaMaxima() {
		return cargaMaxima;
	}
}
