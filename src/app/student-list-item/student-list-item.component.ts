import { Component, Input } from '@angular/core';
 import { StudentListComponent } from '../student-list/student-list.component';
 import { FormsModule } from '@angular/forms';
 import { NgForOf } from '@angular/common';
import { User } from '../Shared/Models/user';
import {CurrencyPipe,UpperCasePipe,LowerCasePipe} from "@angular/common";

@Component({
  selector: 'app-student-list-item',
  standalone: true,
  imports: [StudentListComponent,CurrencyPipe,UpperCasePipe,LowerCasePipe],
  templateUrl: './student-list-item.component.html',
  styleUrl: './student-list-item.component.scss'
})
export class StudentListItemComponent {
  @Input() student?: any;
}
