import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../shared/auth-service/user.model';
import { UserService } from '../shared/auth-service/user.service';
declare var M:any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {

  constructor(public usersService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.resetForm();
  }
  resetForm(form?:NgForm){
    if(form){
      form.reset();
    }
    this.usersService.selectedUser={
      _id:"",
      fullName:"",
      email:"",
      password:""
    }
  }
 
  signin(form: NgForm){
    this.usersService.getUserByEmail(form.value.email).subscribe((res)=>{
      this.usersService.users=res as User[];
      console.log(this.usersService.users.length);
      this.validationUser(form, this.usersService.users);
    });
  }
  validationUser(form: NgForm, users: User[]){
    if(this.usersService.users.length>0){
      if(form.value.password == this.usersService.users[0].password){
        localStorage.setItem('email',JSON.stringify(form.value.email));
        this.router.navigate(['main']).then(()=>{window.location.reload()});
      }
      else{
        localStorage.setItem('email',JSON.stringify("fail"));
        M.toast({html:'Login Fail',class:'rounded'});
      }
    }
  }
}
