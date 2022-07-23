import { LogoComponent } from './../../components/logo/logo.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {HalfCircleSpinnerModule} from 'angular-epic-spinners';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    HalfCircleSpinnerModule,
  ],
  declarations: [LoginPage, LogoComponent]
})
export class LoginPageModule {}
