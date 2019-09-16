import { Cliente } from "../cliente/cliente";
import { Endereco } from '../cliente/endereco';
import { Telefone } from '../cliente/telefone';
import { Locador } from '../locador/locador';
import { Locatario } from '../locatario/locatario';

describe('Cliente', () => {
    it('should create an instance', () => {
        expect(new Locador('Eduardo Pessoa', '', '', '', 'true', new Endereco('', '', '', ''), new Telefone('', ''), 'cpf')).toBeTruthy();

    });
    it('should accept values in the constructor', () => {
        let cliente = new Locatario('Eduardo Carreira', '', '', '', 'false', new Endereco('', '', '', ''), new Telefone('', ''), 'cnpj');
        
        expect(cliente.nome).toEqual('Eduardo Carreira');
        expect(cliente.cadastroPessoa).toEqual('cnpj');
        expect(cliente.id).toBeUndefined();
    });
});

