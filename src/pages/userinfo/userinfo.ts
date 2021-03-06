import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the UserinfoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-userinfo',
  templateUrl: 'userinfo.html',
})
export class UserinfoPage {
  item: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
   this.item = navParams.get('item');
   console.log(this.item);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserinfoPage');
  }

}
