import { Cliente } from '../cliente/cliente';
import { Endereco } from '../cliente/endereco';
import { Telefone } from '../cliente/telefone';

export class Locador extends Cliente {
    constructor(
        nome: string,
        rg: string,
        email: string,
        prfissao: string,
        tipoCliente: string,
        endereco: Endereco,
        telefone: Telefone,
        public cpf: string,
    ) {
        super(nome, rg, email, prfissao, tipoCliente, endereco, telefone)
    }
}