import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { ServicesService } from './services.service';

@Injectable({
  providedIn: 'root'
})
export class ConvertirService {

  constructor(
    private Data: DataService,
    private servicios: ServicesService
  ) { }

  listarCurrencies () {
    const url = `${ this.servicios.ApiURL }listarCurrencies`;
    return this.servicios.Promet(this.Data.metodoGet(url));
  }

  convertit (data) {
    const url = `${ this.servicios.ApiURL }convertir`;
    return this.servicios.Promet(this.Data.metodoPost(url, data));
  }
}
