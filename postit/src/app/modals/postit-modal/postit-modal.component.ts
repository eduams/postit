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
public color: PostitColorEnum = PostitColorEnum.BLUE;

    public title: string='';

    public annotation: string='';

  ngOnInit() {}

}
