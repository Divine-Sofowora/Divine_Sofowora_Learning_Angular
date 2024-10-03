import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {User} from "../Shared/Models/user"
import {userList} from "../Shared/Models/mockData-user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }


  getUser(): Observable<User[]>{
    return  of (userList)
  }
}
