import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ShopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html',
})
export class ShopPage {

    // 设置默认选中页面
    public tabs: string = 'int';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  Gofind(){
    this.navCtrl.push('FindPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShopPage');
  }

}
