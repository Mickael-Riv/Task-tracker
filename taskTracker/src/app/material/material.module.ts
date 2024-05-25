import { NgModule } from '@angular/core';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input'
import { FormsModule } from '@angular/forms';


@NgModule({

imports: [

  MatSidenavModule,
  MatButtonToggleModule,
  MatButtonModule,
  MatDialogModule,
  MatInputModule,
  FormsModule
],

exports: [

  MatSidenavModule,
  MatButtonToggleModule,
  MatButtonModule,
  MatDialogModule,
  MatInputModule,
  FormsModule
]

})

export class MaterialModule {}