import {NgClass, NgFor} from '@angular/common';
import {Component, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../Shared/Models/user';
import { StudentListItemComponent } from '../student-list-item/student-list-item.component'
import {userList} from "../Shared/Models/mockData-user";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [FormsModule, NgFor, NgClass, StudentListItemComponent],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.scss'
})

export class StudentListComponent implements OnInit {

  showColumns: String[]=['id','name','email','phone']


  constructor(private studentInfo: UserService) {
  }
  ngOnInit(): void {
  }

  protected readonly userList = userList;
}
