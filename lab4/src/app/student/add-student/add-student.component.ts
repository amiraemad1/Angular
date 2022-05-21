import { Component, OnInit } from '@angular/core';
import {StudentService} from "../../student.service";

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  displayCreateModal: boolean = false;
  constructor(public studentService:StudentService) { }

  ngOnInit(): void {
  }

  showCreateDialog(){
    this.displayCreateModal = true;
  }

  add(name: string, age: string, department_number: string){
    this.displayCreateModal = false;
    this.studentService.addNew(name, Number(age), Number(department_number))
  }

}
