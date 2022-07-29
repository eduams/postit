import { PostItPayload } from './../../models/payloads/postit.payload';
import { PostitProxy } from './../../models/proxies/postit.proxy';
import { PostitColorEnum } from 'src/app/models/enums/postit-color.enum';
import { ModalController } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-postit-modal',
  templateUrl: './postit-modal.component.html',
  styleUrls: ['./postit-modal.component.scss'],
})
export class PostitModalComponent implements OnInit {

  constructor(
     readonly modalController: ModalController,
  ) { }

@Input()
public color: PostitColorEnum;


@Input()
public create: boolean = false;

@Input()
    public postIt: PostItPayload ={
      id: 6,
      title: '',
      annotation: '',
      color: PostitColorEnum.BLUE
    };


  ngOnInit() {
    if(!this.color){
      this.color = this.postIt.color;
    }
  }

  public savePostIt(): void{
    this.postIt.color = this.color;
    this.modalController.dismiss(this.postIt);
  }

}
