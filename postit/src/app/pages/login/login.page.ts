import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

export interface LoginPayload{
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  constructor(private readonly toastControler: ToastController,
    private readonly alertController: AlertController) {
   }

  public email: string ='';
  public password: string ='';

  public loginPayload: LoginPayload = {
    email: '',
    password: '',
  }

  public isLoading: boolean = false;

  public async login(): Promise<void>{
    this.isLoading = true;

    const toast = await this.toastControler.create({
      message: 'Logando...',
      duration: 2000,
    });
    toast.present();
//alert
    const alert = await this.alertController.create({
      header: 'Alert!',
      buttons: [
        {
          text: 'OK',
          role: 'confirm',
          handler: () => { console.log('ok'); }
        }
      ]
    })
    alert.present();
    console.log(this.loginPayload);
  }
  public canLogin(): boolean{
    const regex = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$');

    const emailIsValid = regex.test(this.loginPayload.email)

    if(emailIsValid && this.loginPayload.password !== ''){
    return true;
    }
    else{return false}
  }
}
