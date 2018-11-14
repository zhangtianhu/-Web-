import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // 设置默认选中页面
  public tabs: string = 'int';
  constructor(public navCtrl: NavController) {

  }
  // jiaJu(){
  //   this.navCtrl.push('jiajuPage');
  // }
}
