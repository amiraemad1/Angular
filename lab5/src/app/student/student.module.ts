import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddStudentComponent} from './add-student/add-student.component';
import {DisplayStudentComponent} from './display-student/display-student.component';
import {FormsModule} from "@angular/forms";
import {ButtonModule} from "primeng/button";
import {DialogModule} from "primeng/dialog";
import {InputTextModule} from "primeng/inputtext";
import {RippleModule} from "primeng/ripple";
import {ConfirmPopupModule} from "primeng/confirmpopup";
import {DeleteStudentComponent} from './delete-student/delete-student.component';
import { StudentComponent } from './student/student.component';



@NgModule({
  declarations: [
    AddStudentComponent,
    DisplayStudentComponent,
    DeleteStudentComponent,
    StudentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    RippleModule,
    ConfirmPopupModule
  ],
  exports: [
    StudentComponent
  ]
})

export class StudentModule { }
