import { Component, OnInit } from '@angular/core';
import {StudentService} from "../../student.service";


@Component({
  selector: 'app-display-student',
  templateUrl: './display-student.component.html',
  styleUrls: ['./display-student.component.css']
})
export class DisplayStudentComponent implements OnInit {

  constructor(public studentService: StudentService) { }

  ngOnInit(): void {
    this.studentService.getLocalStorage();
  }

}
