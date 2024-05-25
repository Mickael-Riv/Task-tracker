import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaterialModule } from './material/material.module';
import {NgFor} from '@angular/common';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogViewComponent } from './components/dialog-view/dialog-view.component';

interface Task {
  name: string;
  description: string;
  status: "TODO" | "Progress" | "Completed";
}

export enum Status {Todo= "TODO" , Progress= "Progress", completed= "Completed"};
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MaterialModule, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  keys = Object.values;

  title = 'taskTracker';
  buttonList: Task[] = [];
  selectedTask: Task;
  selectedStatus: Status = Status.Todo;
  statusList = Status;


  constructor(private dialog: MatDialog) {
    this.selectedTask = this.buttonList[0]
  }

  
  openDialog(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.position = {
      'top': '2em',
      left: '15em'
  };
  dialogConfig.data = {
    name: "",
    description: "",
  };

    const dialogRef = this.dialog.open(DialogViewComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => { 
      this.buttonList.push(result); 
    });
  }

  showDetails(index: Task): void {
    this.selectedTask = index;
  }

  setStatus(){
    this.selectedTask.status = this.selectedStatus;
  }
}



