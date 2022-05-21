import { Component, Input, OnInit } from '@angular/core';
import {StudentService} from "../../student.service";
import {ConfirmationService} from "primeng/api";

@Component({
  selector: 'app-delete-student',
  templateUrl: './delete-student.component.html',
  styleUrls: ['./delete-student.component.css']
})
export class DeleteStudentComponent implements OnInit {

  @Input() id=0;

  constructor(public studentService: StudentService, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
  }

  delete(event: Event) {
    this.confirmationService.confirm({
      target: event.target ?? undefined,
      message: 'Do you want to remove this student?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.studentService.remove(this.id);
      },
      reject: () => { }
    });
  }

}
