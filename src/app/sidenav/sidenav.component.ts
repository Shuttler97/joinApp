import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  posts: Array<string> = [];
  newPost: string;
  constructor() { }

  ngOnInit() {
  }
  updatePost(data: string) {
    this.newPost = data;
    if (this.newPost) {
      this.posts.push(this.newPost);
      console.log(this.newPost);
    }

  }
}
