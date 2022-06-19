package labArray;

import java.util.ArrayList;

public class Banco {
    private ArrayList<Cliente> clientes;
    private int numeroDeClientes;

    public Banco()
    {
        clientes = new ArrayList<>();
    }
    public void adicionarCliente(Cliente cliente)
    {
        clientes.add(cliente);
        numeroDeClientes++;
    }
    public Cliente getClientes(int index) {
        return clientes.get(index);
    }
    public int getNumeroDeClientes() {
        return numeroDeClientes;
    }
}
