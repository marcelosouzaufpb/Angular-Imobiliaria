import { Cliente } from "../cliente/cliente";
import { Endereco } from '../cliente/endereco';
import { Telefone } from '../cliente/telefone';

describe('Cliente', () => {
    it('should create an instance', () => {
        expect(new Cliente('Eduardo Pessoa', '', '', '', true, new Endereco('', '', '', ''), new Telefone('', ''), 'cpf')).toBeTruthy();

    });
    it('should accept values in the constructor', () => {
        let cliente = new Cliente('Eduardo Carreira', '', '', '', false, new Endereco('', '', '', ''), new Telefone('', ''), 'cnpj');
        expect(cliente.nome).toEqual('Eduardo Carreira');
        expect(cliente.cadastroPessoa).toEqual('cnpj');
        expect(cliente.id).toBeUndefined();
    });
});

