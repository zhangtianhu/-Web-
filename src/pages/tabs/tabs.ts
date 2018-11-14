import { Component } from '@angular/core';
import { InspirePage } from '../inspire/inspire';
import { ShopPage } from '../shop/shop';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { JiajuPage } from '../jiaju/jiaju';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { NavController } from 'ionic-angular/navigation/nav-controller';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ShopPage;
  tab3Root = ContactPage;
  tab4Root = InspirePage;
  constructor(public modalCtrl:ModalController,public navCtrl:NavController) {
  }
  ionViewDidLoad(){
    document.querySelector('#tab-t0-2').addEventListener('click',()=>{
      let profileModal = this.modalCtrl.create(JiajuPage);
      profileModal.present();
    })
  }
}
