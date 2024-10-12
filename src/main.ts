import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {provideRouter, Routes} from "@angular/router";
import {StudentListComponent} from "./app/student-list/student-list.component";
import {StudentListItemComponent} from "./app/student-list-item/student-list-item.component";
import {ModifyStudentComponent} from "./app/modify-student/modify-student.component";
import {PageNotFoundComponent} from "./app/page-not-found/page-not-found.component";


const routes: Routes =[
  {path:'', redirectTo: '/student', pathMatch: 'full'},
  { path: 'student', component: StudentListComponent },
  { path: 'student/:id', component: StudentListItemComponent },
  {path : 'modify-student', component: ModifyStudentComponent },
  {path: "**", component: PageNotFoundComponent}
]

bootstrapApplication(AppComponent, {
  providers:[provideRouter(routes)]
});

