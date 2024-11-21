import { Pipe, PipeTransform } from '@angular/core';
import {User} from "../Shared/Models/user";

@Pipe({
  name: 'studentCourse',
  standalone: true
})
export class StudentCoursePipe implements PipeTransform {

  transform(student: User): string {
    return `${student.studentName} ${student.phone} `;
  }

}
