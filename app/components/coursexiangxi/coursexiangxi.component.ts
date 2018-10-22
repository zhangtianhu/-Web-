import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-coursexiangxi',
  templateUrl: './coursexiangxi.component.html',
  styleUrls: ['./coursexiangxi.component.css']
})
export class CoursexiangxiComponent implements OnInit {

  constructor(private http:HttpClient,private router:ActivatedRoute) { }
kechengId:number;
courses;
  ngOnInit() {
    this.http.get('/api/coursexiangxi').subscribe((data)=>{
      this.courses = data;
      console.log(data);
    })
    
    this.kechengId=this.router.snapshot.params['kechengId'];
    this.http.get('/api/kecheng/'+this.kechengId).subscribe(data=>{
      this.courses = data;
    })
  }

}
