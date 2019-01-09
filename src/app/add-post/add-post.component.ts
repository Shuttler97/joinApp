import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  @ViewChild('inputText') text;
  postText = '';

  constructor(public dialogRef: MatDialogRef<AddPostComponent>) {
  }

  ngOnInit() {
  }

  postButtonClicked() {
    this.postText = this.text.nativeElement.value;
    this.dialogRef.close(this.postText);
  }
}



