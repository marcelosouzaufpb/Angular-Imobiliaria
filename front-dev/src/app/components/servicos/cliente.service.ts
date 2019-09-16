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
    delete(id: number){
        this.listaDeClientes = this.listaDeClientes.filter(cliente => cliente.id !== id)
    }
}