import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';
import{HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-shequ',
  templateUrl: './shequ.component.html',
  styleUrls: ['./shequ.component.css']
})
export class ShequComponent implements OnInit {

  constructor(private router:ActivatedRoute,private http:HttpClient) { }
shequ
  ngOnInit() {
    this.http.get('/api/shequ').subscribe((data)=>{
      this.shequ = data;
      console.log(data)
    })  
  }

}
