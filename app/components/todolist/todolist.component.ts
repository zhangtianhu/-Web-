import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  title:string = 'ToDoList';
  txt:string;
  counter:number=0;
  //arr:Object[]=[];
  arr:Msg[]=[];
  fun(e){
    if(e.keyCode==13){
      //this.arr.push({title:this.txt,done:false});
      this.arr.push(new Msg(this.txt,false));
      this.txt="";
      this.count();
    }
  };

  count(){
    this.counter=0;
    this.arr.forEach((value,index)=>{
      if(value.done){
        this.counter++;
      }
    });

  }
  del(i:number){
    this.arr.splice(i,1);
    this.count();
  }
  
  add1(i:number){
    this.arr[i].done=!this.arr[i].done;
    this.count();
  }
}
export class Msg{
  constructor(public title:string,public done:boolean){

  }

}
