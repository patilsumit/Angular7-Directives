import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mydirectives',
  templateUrl: './mydirectives.component.html',
  styleUrls: ['./mydirectives.component.css']
})
export class MydirectivesComponent implements OnInit {

   coursesList=["FullStack Developer","MEAN STACK Developer","MERN STACK Developer","MobileApps Developer"];
  //coursesList=[];  //No Coures Found in Front End
  
  courseNumber="5";
 
   

  constructor() { }

  ngOnInit() {
  }

}
