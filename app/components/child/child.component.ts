import { Component, OnInit ,Input ,EventEmitter,Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  
  @Input() count;
  @Input() arr;
  @Output() delIndex = new EventEmitter();
  @Output() changeIndex = new EventEmitter();
  del(i){
    this.delIndex.emit(i);
  }
  change(i) {
    this.arr[i].done = !this.arr[i].done;
    this.changeIndex.emit(i);
  }

  ngOnInit(){

  }
  




}
