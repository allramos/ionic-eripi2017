import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder } from '@angular/forms';
/**
 * Generated class for the ValidacaoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-validacao',
  templateUrl: 'validacao.html',
})
export class ValidacaoPage {

  cadastro: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder) {
    this.cadastro = this.fb.group({
      nome: ['', Validators.required],
      senha: ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(8)])]
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ValidacaoPage');

  }

  entrar(){
    console.log(this.cadastro.value);
  }

}
