import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../shared/auth-service/user.model';
import { UserService } from '../shared/auth-service/user.service';

declare var M:any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers:[UserService]
})
export class RegisterComponent implements OnInit {
  constructor(public usersService: UserService,
    public router: Router) { }
  ngOnInit(): void {
    this.resetForm();
  }
  register(form: NgForm){
    console.log(form.value);
    this.usersService.postUser(form.value).subscribe((res)=>{
      M.toast({html:'Register Success',class:'rounded'});
      this.router.navigate(['main']).then(()=>{window.location.reload()});
    });
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
  userList(){
    this.usersService.getUserList().subscribe((res)=>{
      this.usersService.users=res as User[];
    });
  }
  onEdit(user:User){
    this.usersService.selectedUser=user;
  }
  onDelete(_id:string, form:NgForm){
    if(confirm('Are you sure to delete')==true){
      this.usersService.deleteUser(_id).subscribe((res)=>{
        this.userList();
        this.resetForm(form);
        M.toast({html:'Delete Successfully',class:'rounded'})
      })
    }
  }
}
