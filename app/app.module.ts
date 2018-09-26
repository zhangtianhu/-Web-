import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { Child1Component } from './components/child1/child1.component';
import {ServicenameService} from './services/servicename.service'
@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    ParentComponent,
    ChildComponent,
    Child1Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ServicenameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
