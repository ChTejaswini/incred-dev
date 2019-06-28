import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { EventEmitter } from 'events';
import { DataService } from '../../services/DataService';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  userData:any[] =[];
  showuser:boolean=false;
  id:number;
  constructor(public dataService:DataService ) {
   
   }

  ngOnInit() {
    this.getName();

  }
  getName(){
    this.userData = this.dataService.data;
  }
  showdetail(id){

     if(this.id==this.dataService.data.EmpID){
       this.showuser=true;
     
     }

  }
}
