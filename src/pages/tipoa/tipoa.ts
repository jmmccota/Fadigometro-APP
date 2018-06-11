import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { BLE } from '@ionic-native/ble';

@Component({
  selector: 'tipo-a',
  templateUrl: 'tipoa.html'
})
export class TipoaPage {
  texto: any;
  lista = [];
  loading: any;
  constructor(public navCtrl: NavController, private ble: BLE, public loadingCtrl: LoadingController) {
    this.loading = this.loadingCtrl.create({
      content: 'Carregando...'
    });
  }

  searchDevices() {
    this.ble.isEnabled().then(resp => {
      this.loading.present()
      this.ble.startScan([])
        .subscribe((resp) => {
          this.lista.push(resp)
          console.log(resp);
          this.loading.dismiss();
        });
    }).catch(reason => {
      this.ble.enable();
      console.log(JSON.stringify(reason));
    });
  }

  connect(idMac) {
    this.texto = `${idMac}\n`;
    console.log(idMac);
    this.ble.connect(idMac).subscribe(resp => {
      this.texto += JSON.stringify(resp, undefined, 2);
    });
    this.texto += "\nRSSI\n";
    this.ble.readRSSI(idMac).then(resp => {
      this.texto += JSON.stringify(resp, undefined, 2);
    });
    this.texto += "\nRawData\n";
    this.ble.read(idMac,undefined,undefined).then(resp => {
      this.texto += JSON.stringify(resp, undefined, 2);
    });
  }
}
