import {NgClass, NgFor} from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../Shared/Models/user';
import { StudentListItemComponent } from '../student-list-item/student-list-item.component'

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [FormsModule, NgFor, NgClass, StudentListItemComponent],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.scss'
})

export class StudentListComponent {

}
