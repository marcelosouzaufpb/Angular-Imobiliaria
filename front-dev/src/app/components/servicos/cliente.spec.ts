import { Cliente } from "../cliente/cliente";
import { Endereco } from '../cliente/endereco';
import { Telefone } from '../cliente/telefone';
import { Locador } from '../locador/locador';
import { Locatario } from '../locatario/locatario';

describe('Cliente', () => {
    it('deve criar uma instância', () => {
        expect(new Locador('Eduardo Pessoa', '', '', '', 'true', new Endereco('', '', '', ''), new Telefone('', ''), 'cpf')).toBeTruthy();

    });
    it('deve aceitar valores no construtor', () => {
        let cliente = new Locatario('Eduardo Carreira', '', '', '', 'false', new Endereco('', '', '', ''), new Telefone('', ''), 'cnpj');

        expect(cliente.nome).toEqual('Eduardo Carreira');
        expect(cliente.cnpj).toEqual('cnpj');
        expect(cliente.id).toBeUndefined();
    });
});

