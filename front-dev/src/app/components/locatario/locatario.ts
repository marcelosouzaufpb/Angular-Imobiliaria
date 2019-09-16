import { Cliente } from '../cliente/cliente';
import { Endereco } from '../cliente/endereco';
import { Telefone } from '../cliente/telefone'

export class Locatario extends Cliente {
    constructor(
        nome: string,
        rg: string,
        email: string,
        profissao: string,
        tipoCliente: string,
        endereco: Endereco,
        telefone: Telefone,
        public cnpj: string,

    ) {
        super(nome, rg, email, profissao, tipoCliente, endereco, telefone)
    }
}