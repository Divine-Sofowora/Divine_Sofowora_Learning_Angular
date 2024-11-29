import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {provideRouter, Routes} from "@angular/router";
import {StudentListComponent} from "./app/student-list/student-list.component";
import {StudentListItemComponent} from "./app/student-list-item/student-list-item.component";
import {ModifyStudentComponent} from "./app/modify-student/modify-student.component";
import {PageNotFoundComponent} from "./app/page-not-found/page-not-found.component";
import {importProvidersFrom} from "@angular/core";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


const routes: Routes =[
  {path:'', redirectTo: '/student', pathMatch: 'full'},
  { path: 'student', component: StudentListComponent },
  { path: 'student/:id',
    loadComponent: ()=>
      import('./app/student-list-item/student-list-item.component').then(m => m.StudentListItemComponent)},
  {path:'modify-student',
    loadComponent: ()=>
  import('./app/modify-student/modify-student.component').then(m => m.ModifyStudentComponent)},
  {path:'**',
    loadComponent: ()=>
      import('./app/page-not-found/page-not-found.component').then(m => m.PageNotFoundComponent)},
];

bootstrapApplication(AppComponent, {
  providers:[provideRouter(routes),
  importProvidersFrom(), provideAnimationsAsync()]

});



