import { Component, OnInit } from '@angular/core';
import {Department2} from '../_models/department';


@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  dept:Department2=new Department2(10,"os",50);
  // ndept:Department2=new Department2(0,"",0);
  showflag=false;
  depts:Department2[]=[
    new Department2(10,"os",50),
    new Department2(20,"os",60),
    new Department2(30,"os",70),
  
  ]; 
  ndept:Department2=new Department2(0,"",0);
  viewDepartment: Department2 = new Department2(0, "hidden0000", 0);
  department: Department2 = new Department2(0, "hidden0000", 0);
  Add(){
    this.depts.push(new Department2(this.ndept.id,this.ndept.name,this.ndept.capacity));
    this.ndept.id=0;
    this.ndept.name="";
    this.ndept.capacity=0;
  }
  show(departmentId: number) {
    this.showflag=true;
    for (let i = 0; i < this.depts.length; i++) {
      if (this.depts[i].id == departmentId) {
        this.dept= this.depts[i];
        break;
      }
    }
  }

  edit(departmentId: number) {
    for (let i = 0; i < this.depts.length; i++) {
      if (this.depts[i].id == departmentId) {
        this.department = this.depts[i];
        break;
      }
    }
  }

  delete(departmentId: number) {
    for (let i = 0; i < this.depts.length; i++) {
      if (this.depts[i].id == departmentId) {
        this.depts.splice(i,1);
        break;
      }
    }
  }
 
  constructor() { }

  ngOnInit(): void {
  }

}
