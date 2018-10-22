import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

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
