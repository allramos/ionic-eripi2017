import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PerfilPage } from '../perfil/perfil';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { SocialSharing } from '@ionic-native/social-sharing';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // TODO: Puxar para baixo para atualizar

  fotos: string[] = [
    'assets/img/01.jpg',
    'assets/img/02.jpg',
    'assets/img/03.jpg',
    'assets/img/04.jpg',
    'assets/img/05.jpg',
    'assets/img/06.jpg',
    'assets/img/07.jpg',
    'assets/img/08.jpg',
    'assets/img/09.jpg',
    'assets/img/10.jpg',
    'assets/img/11.jpg',
    'assets/img/12.jpg',
    'assets/img/13.jpg',
    'assets/img/14.jpg',
    ];
  fotoCapturada: string;

  perfis: Array<{nome: string, usuario: string, senha: string, fotoPerfil: string,
    postagens: Array<{cod: number, data: string, foto: string, legenda: string, curtida: boolean, likes: number}>}>;

    postagens: any;
    postagens2: any;

    constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera, private socialSharing: SocialSharing) {
      this.carregarPerfis();

    }

    abrirPerfil(perfil){
      this.navCtrl.setRoot(PerfilPage, {perfil: perfil});
    }

    curtir(postagem){
      postagem.curtida = !postagem.curtida;
      if(postagem.curtida){
        postagem.likes++;
      }else{
        postagem.likes--;
      }
    }

    gerarNumero(limite): number{
      return Math.floor(Math.random()*limite);
    }

    carregarPerfis(){
      this.carregarPostagens();
      this.perfis = [
      {nome: 'Marcos Lima', usuario: 'marquinhos_lima', senha: '123', fotoPerfil: "assets/img/perfil/marcos.jpg", postagens: this.postagens},
      {nome: 'Gabriel Oliveira', usuario: 'gabriel12', senha: '123', fotoPerfil: "assets/img/perfil/gabriel.jpg", postagens: this.postagens2},
      {nome: 'Tiago da Silva Rocha', usuario: 'tiagorocha', senha: '123', fotoPerfil: "assets/img/perfil/tiago.jpg", postagens: this.postagens},
      {nome: 'Morgana Sousa', usuario: 'morganasousa', senha: '123', fotoPerfil: "assets/img/perfil/morgana.jpg", postagens: this.postagens2},
      {nome: 'Patrícia Silva', usuario: 'paty_silva', senha: '123', fotoPerfil: "assets/img/perfil/patricia.jpg", postagens: this.postagens},
      ]
    }

    carregarPostagens(){
      this.postagens = [
      {
        cod: this.gerarNumero(500),
        data: "14 de Junho de 2017",
        foto: this.fotos[this.gerarNumero(this.fotos.length)],
        legenda: "Olha que espetáculo de animal!",
        curtida: false,
        likes: this.gerarNumero(1000)
      },
      {
        cod: this.gerarNumero(500),
        data: "14 de Junho de 2017",
        foto: this.fotos[this.gerarNumero(this.fotos.length)],
        legenda: "",
        curtida: false,
        likes: this.gerarNumero(1000)
      },
      {
        cod: this.gerarNumero(500),
        data: "14 de Junho de 2017",
        foto: this.fotos[this.gerarNumero(this.fotos.length)],
        legenda: "#animais",
        curtida: false,
        likes: this.gerarNumero(1000)
      }

      ];

      this.postagens2 = [
      {
        cod: this.gerarNumero(500),
        data: "14 de Junho de 2017",
        foto: this.fotos[this.gerarNumero(this.fotos.length)],
        legenda: "Olha que espetáculo de animal!",
        curtida: false,
        likes: this.gerarNumero(1000)
      },
      {
        cod: this.gerarNumero(500),
        data: "14 de Junho de 2017",
        foto: this.fotos[this.gerarNumero(this.fotos.length)],
        legenda: "",
        curtida: false,
        likes: this.gerarNumero(1000)
      },
      {
        cod: this.gerarNumero(500),
        data: "14 de Junho de 2017",
        foto: this.fotos[this.gerarNumero(this.fotos.length)],
        legenda: "#animais",
        curtida: false,
        likes: this.gerarNumero(1000)
      }

      ];
    }

    bateRetrato(){
      const options: CameraOptions = {
        quality: 100,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        targetWidth: 1000,
        targetHeight: 768

      }
      this.camera.getPicture(options).then((imageData) => {
        this.fotoCapturada = "data:image/jpeg;base64," + imageData;
        this.fotos.push(this.fotoCapturada);

        this.socialSharing.shareViaInstagram('TestandoApp', this.fotoCapturada)
          .then(() => console.log('Shared!'))
          .catch((error: any) => console.error("INSTAGRAM: " + error));

      }, (err) => {
        console.log("CAMERA: " + err);
      })
    }

    atualizarPagina(refresher) {
      console.log('Begin async operation', refresher);
      setTimeout(() => {
        console.log('Async operation has ended');
        this.carregarPerfis();
        refresher.complete();
      }, 2000);
    }

  }
