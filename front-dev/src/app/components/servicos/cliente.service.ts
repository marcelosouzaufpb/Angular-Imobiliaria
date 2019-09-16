import { Injectable } from "@angular/core";
import { AppService } from '../../app.service';
import { Cliente } from '../cliente/cliente';

@Injectable({
    providedIn: 'root'
})

export class ClienteService {
    lastId = 0;

    listaDeClientes: Cliente[] = [];

    constructor(private appService: AppService) {
    }

    //Função adicionar Cliente 
    add(cliente: Cliente): Cliente {
        if (!cliente.id) {
            cliente.id = ++this.lastId;
        }
        this.listaDeClientes.push(cliente);
        return cliente;
    }

    //Função deletar Cliente 
    delete(id: number) {
        this.listaDeClientes = this.listaDeClientes.filter(cliente => cliente.id !== id)
    }

    //Função atualizar Cliente
    update(novoCliente: Cliente): Cliente {
        const velhoCliente = this.getById(novoCliente.id);
        if (!velhoCliente) {
            return;
        }
        Object.assign(velhoCliente, novoCliente);
        return velhoCliente;
    }

    //Simular GET em /clientes
    list(): Cliente[] {
        return this.listaDeClientes;
    }

    //Simular GET em /clientes/{id}
    getById(id: number): Cliente {
        return this.listaDeClientes
            .filter(cliente => cliente.id === id)
            .pop();
    }

    changeMessage(message: string) {
        this.appService.changeMessage(message);
    }

    clearMessage() {
        this.appService.clearMessage();
    }

}