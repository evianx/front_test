import { Component, OnInit } from '@angular/core';
import { ConvertirService } from './services/convertir.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'front';
  arrayCunrryValue = [];
  arrayCunrryKey = [];
  dataConvertir = {
    to: '',
    from: '',
    amount: 1
  };
  resultado = 0;

  constructor(
    private Convertir: ConvertirService
  ) { }

  ngOnInit() {
    this.cargarCunrry();
  }

  async cargarCunrry() {
    const res = await this.Convertir.listarCurrencies();
    console.log(res);
    this.arrayCunrryValue = Object.values(res['data']);
    this.arrayCunrryKey = Object.keys(res['data']);
    this.dataConvertir.from = this.arrayCunrryKey[0];
    this.dataConvertir.to = this.arrayCunrryKey[1];
    this.ConvertirS();
  }

  async ConvertirS() {
    const res = await this.Convertir.convertit(this.dataConvertir);
    console.log(res);
    this.resultado = res['data'];
  }
}
