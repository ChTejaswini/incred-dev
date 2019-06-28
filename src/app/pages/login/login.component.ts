import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router} from '@angular/router';
import { DataService } from '../../services/DataService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginFormGroup: FormGroup;
   usersArray  = [];
  constructor(public formBuilder: FormBuilder,public router:Router,public dataService:DataService) {
    this.createloginFormGroup();
   }
   createloginFormGroup() {
    this.loginFormGroup = this.formBuilder.group(
      {
        Name: ['', Validators.required],
        EmpID:['', Validators.required],
        age:[''],
        EmailID:['']
      });
  }
  

  ngOnInit() {
  }
  doLogin() {
   
    if (this.loginFormGroup.valid) {
      const input ={
        Name:this.loginFormGroup.controls.Name.value,
        EmpID:this.loginFormGroup.controls.EmpID.value,
        age:this.loginFormGroup.controls.age.value,
        EmailID:this.loginFormGroup.controls.EmailID.value
      }
      this.usersArray.push(input);
      this.dataService.data=this.usersArray;
      // localStorage.setItem('UserData',JSON.stringify(this.usersArray));
            this.router.navigateByUrl('/users-list');
    }
}

}