import { Component, Inject } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  name: string;
  description: string;
  status: "TODO" | "Progress" | "Completed";
}

@Component({
  selector: 'app-dialog-view',
  standalone: true,
  imports: [MaterialModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent],
  templateUrl: './dialog-view.component.html',
  styleUrl: './dialog-view.component.scss'
})
export class DialogViewComponent {
  constructor(public dialogRef: MatDialogRef<DialogViewComponent>, @Inject(MAT_DIALOG_DATA) public data:DialogData) {
    data.status = "TODO";
  }
}
