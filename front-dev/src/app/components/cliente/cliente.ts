
export class Cliente {
    public id: number;

    constructor (
        public nome: string,
        public rg: string,
        public email: string,
        public prfissao: string,
        public tipoCliente: string, 
    ){}
}