import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {provideRouter, Routes} from "@angular/router";
import {StudentListComponent} from "./app/student-list/student-list.component";
import {StudentListItemComponent} from "./app/student-list-item/student-list-item.component";


const routes: Routes =[
  { path: 'student', component: StudentListComponent },
  { path: 'student/:id', component: StudentListItemComponent },
]

bootstrapApplication(AppComponent, {
  providers:[provideRouter(routes)]
});


