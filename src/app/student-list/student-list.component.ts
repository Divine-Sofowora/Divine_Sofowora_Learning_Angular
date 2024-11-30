import {
  CurrencyPipe,
  DecimalPipe,
  LowerCasePipe,
  NgClass,
  NgFor, NgIf,
  PercentPipe,
  TitleCasePipe,
  UpperCasePipe
} from '@angular/common';
import {Component, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../Shared/Models/user';
import { StudentListItemComponent } from '../student-list-item/student-list-item.component'
import {userList} from "../Shared/Models/mockData-user";
import {UserService} from "../services/user.service";
import {Observable} from "rxjs";
import {Router,RouterLink} from "@angular/router";
import {StudentCoursePipe} from "../pipes/student-course.pipe";
import {HoverHighlightDirective} from "../directives/hover-highlight.directive";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable, MatTableDataSource
} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatButton} from "@angular/material/button";




@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [FormsModule, NgFor, NgClass, RouterLink, CurrencyPipe, UpperCasePipe, PercentPipe, LowerCasePipe, TitleCasePipe, DecimalPipe, StudentCoursePipe, HoverHighlightDirective, MatTable, MatColumnDef, MatHeaderCell, MatCell, MatCellDef, MatHeaderCellDef, MatHeaderRow, MatRow, MatPaginator, MatHeaderRowDef, MatRowDef, NgIf, MatButton],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.scss'
})

export class StudentListComponent implements OnInit {
  userList: User[] = [];
  showColumns: String[]=['id','studentName','email','phone','fees']
  dataSource: MatTableDataSource<User> = new MatTableDataSource(this.userList);


  constructor(private userService: UserService,private router: Router) {
  }
  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next: (data: User[]) => {
        this.userList = data,
          this.dataSource.data = data; // Assign data to dataSource
      },
      error:err => console.error("error finding students", err),
      complete: () => console.log("Complete"),


    })
  }

  selectedStudentItem?: User;

  selectedStudent(User: User): void{
    this.selectedStudentItem = User
  }

  onEdit(): void {
    this.router.navigate(['/modify-student']);
  }

  onDelete(): void {


  }



}
