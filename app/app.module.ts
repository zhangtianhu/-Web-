import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ParentsComponent } from './components/parents/parents.component';
import { Child1Component } from './components/child1/child1.component';
import { Child2Component } from './components/child2/child2.component';
import {ServicenameService} from './services/servicename.service';
import { RouterModule ,Router } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { TongbuComponent } from './components/tongbu/tongbu.component';
import { CourseComponent } from './components/course/course.component';
import { ShequComponent } from './components/shequ/shequ.component';
import { HttpClientModule } from '@angular/common/http';
import { TongbudetailComponent } from './components/tongbudetail/tongbudetail.component';
import { CoursexiangxiComponent } from './components/coursexiangxi/coursexiangxi.component';
@NgModule({
  declarations: [
    AppComponent,
    ParentsComponent,
    Child1Component,
    Child2Component,
    HeaderComponent,
    HomeComponent,
    TongbuComponent,
    CourseComponent,
    ShequComponent,
    TongbudetailComponent,
    CoursexiangxiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'home',component:HomeComponent,children:[
       
      ]},
    {path:'tongbu',component:TongbuComponent},
    {path:'tongbu/:courseId',component:TongbudetailComponent},
    {path:'shequ', component:ShequComponent},
    {path:'course',component:CourseComponent},
    {path:'course/:kechengId',component:CoursexiangxiComponent},
    {path:"",redirectTo:'home',pathMatch:"full"},
    {path:'**',component:ShequComponent}
  ]),
  HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
