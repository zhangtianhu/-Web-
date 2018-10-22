import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import{HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor(private http:HttpClient,private router:ActivatedRoute,private route:Router ) { }
kecheng;
kechengId;
  ngOnInit() {
    this.http.get('/api/kecheng').subscribe((data)=>{
      this.kecheng = data;
      console.log(data);
    })
    this.router.params.subscribe((params)=>{
      this.kechengId = params['kechengId'];
    });
  }

  go(){
    //js跳转
    this.route.navigate(['/course',600],{queryParams:{id:1000}});
  }

}
export class kecheng{
  constructor(
      public id:number,
      public images:string, 
      public task:number,
      public person:number
  ){}
}
