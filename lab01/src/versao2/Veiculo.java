package versao2;

public class Veiculo {
	private double carga = 0;
	private double cargaMaxima;
	
	public Veiculo(double cargaMaxima) {
		this.cargaMaxima = cargaMaxima;
	}
	
	public boolean adicionarCaixa(double peso) {
		double temp = carga + peso;
		if (temp <= cargaMaxima) {
			this.carga = temp;
			return true;
		} else {
			return false;			
		}
	}
	
	public double getCarga() {
		return carga;
	}
	public double getCargaMaxima() {
		return cargaMaxima;
	}
}
