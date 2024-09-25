import { Component, Input } from '@angular/core';
import { StudentListComponent } from '../student-list/student-list.component';

@Component({
  selector: 'app-student-list-item',
  standalone: true,
  imports: [],
  templateUrl: './student-list-item.component.html',
  styleUrl: './student-list-item.component.scss'
})
export class StudentListItemComponent {
  @Input()  student?: StudentListComponent;
}
