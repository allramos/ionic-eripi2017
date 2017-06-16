import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AmigosPage } from '../amigos/amigos';


@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  perfil: any;

  amigos: Array<{nome: string, fotoPerfil: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.perfil = navParams.get('perfil');
    this.carregarAmigos();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
  }

  mostrarAmigos(){
    this.navCtrl.push(AmigosPage, {amigos: this.amigos});
  }

  carregarAmigos(){
    this.amigos = [
    {nome: "Chiquim", fotoPerfil: "assets/img/perfil/chiquim.jpg"},
    {nome: "Maurício", fotoPerfil: "assets/img/perfil/mauricio.jpg"},
    ];
  }

  





}
