import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  ApiURL = 'http://localhost:443/api/';

  constructor() { }

  Promet(subscribe) {
    return new Promise((resolve, reject) => subscribe.subscribe((resul) => resolve(resul), error => reject(error)));
  }
}
