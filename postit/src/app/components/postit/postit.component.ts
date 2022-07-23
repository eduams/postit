import { PostitProxy } from './../../models/proxies/postit.proxy';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-postit',
  templateUrl: './postit.component.html',
  styleUrls: ['./postit.component.scss'],
})
export class PostitComponent implements OnInit {

  constructor() { }

  @Input()
  public postit: PostitProxy;

  @Output()
    public postitSelected: EventEmitter<PostitProxy> = new EventEmitter<PostitProxy>();

  ngOnInit() {
  }

  public emitPost(): void {
    this.postitSelected.emit(this.postit);
  }

}
