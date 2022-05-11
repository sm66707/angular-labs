import { Component } from "@angular/core";

@Component({
    selector:"app-student",
    templateUrl:"./student.component.html",
    styleUrls:["./student.component.css"]
})
export class StudentComponent{
     stdName:string="ahmed";
     stdImg="assets/images/tie_logo.gif";
     myfun(s:string){
        this.stdName="salma";
          console.log(s);
     }
     updateName(s:string){
         this.stdName=s;
    //  console.log(s);
     }
}