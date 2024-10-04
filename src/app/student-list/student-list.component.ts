import {NgClass, NgFor} from '@angular/common';
import {Component, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../Shared/Models/user';
import { StudentListItemComponent } from '../student-list-item/student-list-item.component'
import {userList} from "../Shared/Models/mockData-user";
import {UserService} from "../services/user.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [FormsModule, NgFor, NgClass, ],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.scss'
})

export class StudentListComponent implements OnInit {

  showColumns: String[]=['id','name','email','phone']


  constructor(private studentInfo: UserService) {
  }
  ngOnInit(): void {
    this.studentInfo.getUsers().subscribe({
      next: (data: User[]) => this.userList = data,
      error:err => console.error("error finding students", err),
      complete: () => console.log("Complete")
    })
  }

  selectedStudentItem?: User;

  selectedStudent(User: User): void{
    this.selectedStudentItem = User
  }


  protected userList = userList;
}
