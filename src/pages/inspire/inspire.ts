import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the InspirePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inspire',
  templateUrl: 'inspire.html',
})
export class InspirePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
    goC(){
    this.navCtrl.push('CPage');
  }
}
