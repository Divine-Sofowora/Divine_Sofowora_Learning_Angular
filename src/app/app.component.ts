import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './Shared/Models/user';
import { CommonModule } from '@angular/common'; 


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Divine_Sofowora_Learning_Angular';
  sportName: string = 'Football';
  jerseyNumber: string = '48';

userList = [
 {  studentId: 1, studentName: "Matt", studentEmail: "Haug@gmail.com", phone: "309-3739-1353", isPresent: false},
 { studentId: 2, studentName: "Sarah", studentEmail: "Sarah@gmail.com", phone: "282-2722-2322", isPresent: true },
 { studentId: 3, studentName: "James", studentEmail: "James@yahoo.com", phone: "4749-4644-4494", isPresent: false },
 { studentId: 4, studentName: "Emily", studentEmail: "Emily@hotmail.com", phone: "459-4525-5115", isPresent: true },
 {  studentId: 5, studentName: "Michael", studentEmail: "Mike@gmail.com", phone: "824-8858-0016", isPresent: true } ,// No phone number
 {  studentId: 6, studentName: "Laura", studentEmail: "Laura@outlook.com", phone: "614-5678-8926", isPresent: false}
];

user1 = { studentId: 1, studentName: 'Matt', studentEmail: 'Haug@gmail.com' };

 
}
