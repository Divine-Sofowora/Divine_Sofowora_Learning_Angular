
import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {User} from "../Shared/Models/user"
import {userList} from "../Shared/Models/mockData-user";


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = userList;

  constructor() {}

  getUsers(): Observable<User[]> {
    return of(userList);
  }

  // Adding basic CRUD methods

  // Create: Add User
  addStudent(newStudent: User): Observable<User[]> {
    this.users.push(newStudent);
    return of(this.users);
  }

  // Update: Update User
  updateStudent(updateStudent: User): Observable<User[]> {
    const index = this.users.findIndex(userList => userList.studentId === updateStudent.studentId);
    if (index !== -1) {
      this.users[index] = updateStudent;
    }
    return of (this.users);
  }

  // Delete: Delete User
  deleteStudent(studentId: number){
    console.log("working")
    delete this.users[studentId -1 ]
  }

  // Read: Get User by ID
  getUserById(id: number): Observable<User | undefined> {
    const users = this.users.find(userList => userList.studentId === id);
    return of ();
  }
  generateNewId():number{
    return this.users.length>0? Math.max(... this.users.map(userList => userList.studentId)) + 1:1;
  }
}
