import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../Shared/Models/user';
import { StudentListItemComponent } from '../student-list-item/student-list-item.component';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [FormsModule,StudentListComponent,NgFor],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.scss'
})

export class StudentListComponent {

  userList : User[]= [
 {  studentId: 1, studentName: "Matt", studentEmail: "Haug@gmail.com", phone: "309-3739-1353", isPresent: false},
 { studentId: 2, studentName: "Sarah", studentEmail: "Sarah@gmail.com", phone: "282-2722-2322", isPresent: true },
 { studentId: 3, studentName: "James", studentEmail: "James@yahoo.com", phone: "4749-4644-4494", isPresent: false },
 { studentId: 4, studentName: "Emily", studentEmail: "Emily@hotmail.com", phone: "459-4525-5115", isPresent: true },
];

}
