import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface courseType {
  title: string;
  subTitle: string;
  points: number;
  description: string;
  stars: number[];
  required: boolean;
  prereq: string;
}
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public course: courseType) {
    console.log(course);
  }

  ngOnInit(): void {}
}
