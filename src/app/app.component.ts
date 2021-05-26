import { ModalComponent } from './modal/modal.component';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'enrol';

  constructor(public dialog: MatDialog) {}

  showModal() {
    const dialogRef = this.dialog.open(ModalComponent);
  }
}
