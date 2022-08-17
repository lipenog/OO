export class Banco {
    constructor(){
        this.clientes = []
    }
    adicionarCliente(cliente){
        this.clientes.push(cliente)
    }
    cliente(indice){
        this.clientes.findIndex(indice)
    }
    numeroClientes(){
        return this.clientes.length()
    }
    clientesNome(nome,sobrenome){
        resultado = []
        this.clientes.forEach(element => {
            if(this.cliente.nome === nome){
                resultado.push(cliente);
            }
        });
        return resultado
    }
}