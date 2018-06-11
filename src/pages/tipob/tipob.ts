import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';

@Component({
  selector: 'tipo-b',
  templateUrl: 'tipob.html'
})
export class TipobPage {
  texto: any;
  lista = [];
  loading: any;
  constructor(public navCtrl: NavController,
    private bls: BluetoothSerial,
    public loadingCtrl: LoadingController) {
    this.texto = "";
    this.loading = this.loadingCtrl.create({
      content: 'Carregando...'
    });
  }
  searchDevices() {
    this.bls.isEnabled().then(resp => {
      this.loading.present()
      this.bls.discoverUnpaired().then((resp) => {
        console.log(JSON.stringify(resp));
        this.lista.push(...resp);
        this.loading.dismiss();
      });
    }).catch(reason => {
      this.bls.enable();
    });
  }

  connect(idMac) {
    this.texto = `${idMac}\n`;
    this.bls.connect(idMac).subscribe(resp => {
      this.texto += JSON.stringify(resp, undefined, 2);
    });
    this.texto += "\nRSSI\n";
    this.bls.readRSSI().then(resp => {
      this.texto += JSON.stringify(resp, undefined, 2);
    });
    this.texto += "\nRawData\n";
    this.bls.subscribeRawData().subscribe(resp => {
      this.texto += JSON.stringify(resp, undefined, 2);
    });
  }
}
