import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { ListDepartmentComponent } from './list-department/list-department.component';
import { DisplayDepartmentComponent } from './display-department/display-department.component';



@NgModule({
  declarations: [
    AddDepartmentComponent,
    ListDepartmentComponent,
    DisplayDepartmentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DepartmentModule { }
