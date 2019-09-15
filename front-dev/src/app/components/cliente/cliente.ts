import { Endereco } from './endereco';
import { Telefone } from './telefone';

export class Cliente {
    public id: number;

    constructor (
        public nome: string,
        public rg: string,
        public email: string,
        public profissao: string,
        public tipoCliente: string,
        public endereco: Endereco,
        public telefone: Telefone, 
    ){}
}