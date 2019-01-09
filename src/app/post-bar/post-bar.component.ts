import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material';
import {AddPostComponent} from '../add-post/add-post.component';

@Component({
  selector: 'app-post-bar',
  templateUrl: './post-bar.component.html',
  styleUrls: ['./post-bar.component.scss']
})
export class PostBarComponent implements OnInit {

  @ViewChild('inputText') inputText;
  @Output() addNewPost = new EventEmitter<string>();
  @Output() addImage = new EventEmitter();
  postText: '';

  constructor(public dialog: MatDialog) {

  }

  openDialog() {
    let dialogRef = this.dialog.open(AddPostComponent, {
      height: '270px',
      width: '580px',
      position: {top: '4%', left: '33%'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`DialogClosed: ${result}`);
      this.postText = result;
      this.addNewPost.emit(this.postText);
    });
  }

  ngOnInit() {
  }

}
