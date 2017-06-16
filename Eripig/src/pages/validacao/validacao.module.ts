import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ValidacaoPage } from './validacao';

@NgModule({
  declarations: [
    ValidacaoPage,
  ],
  imports: [
    IonicPageModule.forChild(ValidacaoPage),
  ],
  exports: [
    ValidacaoPage
  ]
})
export class ValidacaoPageModule {}
