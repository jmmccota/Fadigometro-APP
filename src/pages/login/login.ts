import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  form = {
    Login: '',
    Password: '',
  };
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private http: HttpClient) {
  }

  ionViewDidLoad() {
    //    console.log('ionViewDidLoad LoginPage');
  }

  onSubmit = () => {
    console.log(JSON.stringify(this.form));
    this.http.post(
      "APi",
      this.form
    ).subscribe(resp => {
      console.log(JSON.stringify(resp, undefined, 2));
      this.navCtrl.setRoot(HomePage);
    });
  }

  goToRecovery() {
    this.navCtrl.setRoot(HomePage);
    // this.navCtrl.push(HomePage);
  }

  goToCreate() {
    this.navCtrl.setRoot(HomePage);
    // this.navCtrl.push(HomePage);
  }
}
