import { TestBed, inject } from '@angular/core/testing';
import { AppService } from 'src/app/app.service';
import { ClienteService } from './cliente.service';
import { Cliente } from '../cliente/cliente';
import { Endereco } from '../cliente/endereco';
import { Telefone } from '../cliente/telefone';
import { Locador } from '../locador/locador';
import { Locatario } from '../locatario/locatario';

describe('BookService', () => {
    // Criando atributos para os testes 
    const cliente1 = new Locador('Eduardo Pessoa', '', '', '', 'true', new Endereco('', '', '', ''), new Telefone('', ''), 'cpf');
    const cliente2 = new Locatario('Eduardo Carreira', '', '', '', 'false', new Endereco('', '', '', ''), new Telefone('', ''), 'cnpj');

    // Iniciando Testes
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AppService, ClienteService]
        });
    });

    it('should exist', inject([ClienteService], (service: ClienteService) => {
        expect(service).toBeTruthy();
    }));

    // Testando servico de listar Clientes
    describe('#list()', () => {

        it('deve retornar uma matriz vazia por padrão', inject([ClienteService], (service: ClienteService) => {
            expect(service.list()).toEqual([]);
        }));


        it('deve retornar todos os clientes', inject([ClienteService], (service: ClienteService) => {
            service.add(cliente1);
            service.add(cliente2);
            expect(service.list()).toEqual([cliente1, cliente2]);
        }));
    });

    // Testando salvar Cliente
    describe('#save(book)', () => {

        it('deve atribuir automaticamente um ID de incremento', inject([ClienteService], (service: ClienteService) => {
            service.add(cliente1);
            service.add(cliente2);
            expect(service.getById(1)).toEqual(cliente1);
            expect(service.getById(2)).toEqual(cliente2);
        }));
    });

    // Testando deletar Cliente
    describe('#delete(id)', () => {
        it('deve remover o cliente com o ID correspondente', inject([ClienteService], (service: ClienteService) => {
            service.add(cliente1);
            service.add(cliente2);
            expect(service.list()).toEqual([cliente1, cliente2]);
            service.delete(1);
            expect(service.list()).toEqual([cliente2]);
            service.delete(2);
            expect(service.list()).toEqual([]);
        }));

        it('não deve remover nada se não for encontrado todo com o ID correspondente', inject([ClienteService], (service: ClienteService) => {
            service.add(cliente1);
            service.add(cliente2);
            expect(service.list()).toEqual([cliente1, cliente2]);
            service.delete(3);
            expect(service.list()).toEqual([cliente1, cliente2]);
        }));
    });

    // Testando atualizar Cliente
    describe('#update(book)', () => {
        it('deve retornar o cliente com o ID correspondente e os dados atualizados', inject([ClienteService], (service: ClienteService) => {
            service.add(cliente1);
            cliente2.id = cliente1.id;
            const updated = service.update(cliente2);
            expect(updated.nome).toEqual('Eduardo Carreira');
            expect(updated.id).toEqual('cnpj');
        }));

        it('deve retornar null se todo não for encontrado', inject([ClienteService], (service: ClienteService) => {
            service.add(cliente1);
            cliente2.id = 3;
            const updated = service.update(cliente2);
            expect(updated).toBeUndefined();
        }));
    });

});
