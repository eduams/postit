import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { PostitComponent } from './postit.component';
import { NgModule } from "@angular/core";

@NgModule({

  declarations: [
    PostitComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    PostitComponent
  ],

})

export class PostItModule{ }
