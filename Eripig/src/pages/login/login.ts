import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  usuario: string = '';
  senha: string = '';
  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  fazerLogin(){
    if(this.usuario == '' || this.senha == ''){
      this.showToast('Preencha os campos!');
    }else{
      if(this.usuario == 'ionic' && this.senha== 'ionic'){
        this.showToast('Seja bem vindo '+ this.usuario+'!');
        this.navCtrl.setRoot(HomePage, {usuario: this.usuario});
      }else{
        this.doAlert();
        this.limparCampos();
      }
    }
  }

  showToast(msg: string) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }

  doAlert() {
    let alert = this.alertCtrl.create({
      title: 'Aviso',
      message: 'Usuário ou senha incorretos!',
      buttons: ['Ok']
    });
    alert.present()
  }

  limparCampos(){
    this.usuario = "";
    this.senha = '';
  }
}
