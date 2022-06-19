package labArray;

public class TesteBanco {
    public static void main(String[] args)
    {
        Banco Santander = new Banco();
        Cliente cliente = new Cliente("Bruno", "Henrique");
        Conta conta = new Conta(50000);
        cliente.setConta(conta);
        Santander.adicionarCliente(cliente);
        cliente = new Cliente("Everton", "Ribeiro");
        conta = new Conta(45000);
        cliente.setConta(conta);
        Santander.adicionarCliente(cliente);
        cliente = new Cliente("Filipe", "Luis");
        conta = new Conta(70000);
        cliente.setConta(conta);
        Santander.adicionarCliente(cliente);
        cliente = new Cliente("Gabriel", "Barbosa");
        conta = new Conta(220000);
        cliente.setConta(conta);
        Santander.adicionarCliente(cliente);
        cliente = new Cliente("Diego", "Alves");
        conta = new Conta(50000);
        cliente.setConta(conta);
        Santander.adicionarCliente(cliente);

        for (int i = 0; i < Santander.getNumeroDeClientes(); i++)
        {
            Cliente tmp = Santander.getClientes(i);
            Conta ctmp = tmp.getConta();
            System.out.println("Cliente["+i+"] : " + tmp.getNome() +" "+ tmp.getSobrenome()+" saldo: "+ ctmp.getSaldo());
        }
    }
}
