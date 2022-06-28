package dominio;


import java.util.ArrayList;

public class Banco {
    private ArrayList<Cliente> clientes;
    private int numeroDeClientes;
    private static Banco singleton = new Banco();

    private Banco()
    {
        clientes = new ArrayList<>();
    }
    public static Banco getBanco() {
    	return singleton;
    }
    public void adicionarCliente(Cliente cliente)
    {
        clientes.add(cliente);
        numeroDeClientes++;
    }
    public Cliente getCliente(int index) {
        return clientes.get(index);
    }
    public int getNumeroDeClientes() {
        return numeroDeClientes;
    }
    public ArrayList<Cliente> getCliente(String nome, String sobrenome){
    	ArrayList<Cliente> aux = new ArrayList<>();
    	for(Cliente x:clientes) {
    		if (x.getNome() == nome || x.getSobrenome() == sobrenome) {
    			aux.add(x);
    		}
    	}
    	return aux;
    }
}