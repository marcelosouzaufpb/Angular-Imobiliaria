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

    add(cliente: Cliente): Cliente {
        if(!cliente.id){
            cliente.id = ++this.lastId;
        }
        this.listaDeClientes.push(cliente);
        return cliente;
    }
}