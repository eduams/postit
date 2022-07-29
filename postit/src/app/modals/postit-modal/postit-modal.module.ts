import { FormsModule } from '@angular/forms';
import { PostItModule } from 'src/app/components/postit/postit.module';
import { PostitModalComponent } from './postit-modal.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";

@NgModule({

  declarations: [
    PostitModalComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [


  ],

})

export class PostItModalModule{ }
