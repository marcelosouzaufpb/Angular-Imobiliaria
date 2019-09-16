import { Cliente } from "./cliente";
import { Endereco } from './endereco';
import { Telefone } from './telefone';
import { Locador } from '../locador/locador';
import { Locatario } from '../locatario/locatario';


export const LOCADORES: Locador[] = [
    {
        id: 1,
        nome: 'Marcelo Souza',
        rg: '1234567',
        email: 'marcelo.souza@dce.ufpb.br',
        profissao: 'Estudante',
        tipoCliente: 'Locatario',
        endereco: new Endereco('rua', 'bairro', 'numero', 'cep'),
        telefone: new Telefone('numero', 'dd'),
        cpf: '123.321.123-32'
    }
]

export const LOCATARIOS: Locatario[] = [
    {
        id: 2,
        nome: 'John Doe',
        rg: '1234567',
        email: 'john.doe@gmail.com',
        profissao: 'CEO',
        tipoCliente: 'Locatario',
        endereco: new Endereco('rua', 'bairro', 'numero', 'cep'),
        telefone: new Telefone('numero', 'dd'),
        cnpj: '05.526.392/0001-40'
    }
]
