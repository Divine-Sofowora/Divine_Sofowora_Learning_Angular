import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {User} from "../Shared/Models/user";
import {UserService} from "../services/user.service";
import {userList} from "../Shared/Models/mockData-user";
import { Router } from "@angular/router";
import {FocusDirective} from "../directives/focus.directive";
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {MatInput, MatInputModule} from "@angular/material/input";
import {MatTooltip} from "@angular/material/tooltip";
import {MatButton} from "@angular/material/button";


@Component({
  selector: 'app-modify-student',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, FocusDirective, MatFormField, MatInput, MatFormFieldModule, MatInputModule, MatTooltip, MatButton],
  templateUrl: './modify-student.component.html',
  styleUrl: './modify-student.component.scss'
})
export class ModifyStudentComponent implements OnInit{


  studentForm: FormGroup;
  userList: User | undefined;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {
    this.studentForm = this.fb.group({
      studentId:['', Validators.required],// ID is required
      studentName: ['', Validators.required],// name is required
      studentEmail: ['', Validators.required],
      phone: ['', Validators.required],
    })
  }
  ngOnInit(): void{
    const id = this.route.snapshot.paramMap.get('id');
    if(id) {this.userService.getUserById(+id).subscribe(user => {
      if(user){
        this.userList = user;
        this.studentForm.patchValue(userList)
      }
    });
    }
  }

  onSubmit(): void {
    const userList: User = this.studentForm.value;

    //check if we're updating an existing student
    if(userList.studentId){
      this.userService.updateStudent(userList);
    }else{
      ///for adding a new student, generate a new id
      const newId = this.userService.generateNewId();//this method will crate a new ID
      userList.studentId = newId;
      this.userService.addStudent(userList);
    }
    this.router.navigate(['/student'])
  }

  onAdd(): void {
    this.onSubmit()
  }

  onUpdate(): void{
    this.onSubmit()
  }
  // protected readonly onsubmit = onsubmit;
}
