
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
    return of(this.users);
  }

  // Delete: Delete User
  deleteStudent(id: number): Observable<User[]> {
    this.users = this.users.filter(userList => userList.studentId !== id);
    return of(this.users);
  }

  // Read: Get User by ID
  getUserById(id: number): Observable<User | undefined> {
    const user = this.users.find(userList => userList.studentId === id);
    return of(user);
  }
}
