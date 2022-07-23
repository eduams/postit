import { PostitColorEnum } from './../../../models/enums/postit-color.enum';
import { PostitProxy } from './../../../models/proxies/postit.proxy';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() { }




  public postItArray: PostitProxy[] = [
  {
    id: 0,
    title: "Titulo do post",
    annotation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    color: '#F77D60',
  },
  {
    id: 1,
    title: "Titulo do post",
    annotation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    color: '#3065ac',
  },
  {
    id: 2,
    title: "Titulo do post",
    annotation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    color: '#ff6961',
  },
  {
    id: 3,
    title: "Titulo do post",
    annotation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    color: '#ff6961',
  },
  {
    id: 4,
    title: "Titulo do post",
    annotation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    color: '#3065ac',
  }
  ]

  public postitColorEnum: typeof PostitColorEnum = PostitColorEnum;

  ngOnInit() {
    console.log(this.postitColorEnum)
  }

  public consoleColor(color: string): void{
    console.log(color);
  }

  public printPostit(event: PostitProxy): void{
console.log(event);
  }

}
