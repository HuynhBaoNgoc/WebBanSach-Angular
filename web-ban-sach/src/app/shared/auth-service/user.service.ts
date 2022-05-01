import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../categories.model';
import { User } from './user.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUser!: User;
  selectedCategory!: Category;
  users: User[] = [];
  readonly baseURL='http://localhost:3000/user';
  constructor(private http: HttpClient) { }

  postUser(user: User){
    return this.http.post(this.baseURL, user);
  }

  getUserList(){
    return this.http.get(this.baseURL);
  }

  putUser(user: User){
    return this.http.put(this.baseURL + `/${user._id}`,user);
  }

  deleteUser(_id:string){
    return this.http.delete(this.baseURL + `/${_id}`);
  }
  getUserByEmail(_email:string){
    return this.http.get(this.baseURL + '/usermail' + `/${_email}`);
  }
}
