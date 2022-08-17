import {Cliente} from './Cliente';
import {Banco} from "./Banco";

const pessoa = new Cliente("ygão", "tonelada")
const banco = new Banco()

banco.adicionarCliente(pessoa)

console.log(banco.clientesNome("ygão"))