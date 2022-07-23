import { ToastController } from '@ionic/angular';
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})

export class HelperService {
  constructor(
    private readonly toastController: ToastController){}

  public async showToast(message: string, duration: number = 2000): Promise<void>{
    const toast = await this.toastController.create({
      message: message,
      duration: duration,
    });
    toast.present();
  }
}
