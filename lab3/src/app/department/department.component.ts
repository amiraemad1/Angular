import { Component, OnInit } from '@angular/core';
import { Department} from '../_models/department';


@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  dept:Department= new Department(10,'os','alex');
  depts:Department[]=[
    new Department(1,'OS','Alexandria'),
    new Department(2,'AI','Alexandria'),
    new Department(3,'PD','Alexandria'),
    new Department(4,'Mobile','SmartVillage')

  ];
  show(deptId:number){

    for(let i=0;i< this.depts.length;i++){
        if(this.depts[i].id==deptId){
          this.dept=this.depts[i];
          break;
        }
    }
  }

  edit(deptId:number){
  //processing...
    
  }

  delet(deptId:number){
   //processing...
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
