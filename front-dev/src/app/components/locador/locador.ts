import { Cliente } from '../cliente/cliente';
import { Endereco } from '../cliente/endereco';
import { Telefone } from '../cliente/telefone';

export class Locador extends Cliente {
    constructor(
        nome: string,
        rg: string,
        email: string,
        profissao: string,
        tipoCliente: string,
        endereco: Endereco,
        telefone: Telefone,
        public cpf: string,
    ) {
        super(nome, rg, email, profissao, tipoCliente, endereco, telefone)
    }
}