import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { elementEventFullName } from '@angular/core/src/view';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //create properties
  fullname:string = "Pasu Nimsuwan";

  profileData = {
    "fullname":'',
    "email":'',
    "tel":''
  }

  constructor(public navCtrl: NavController) {

  }

  showProfile(){
    //เปิดหน้า Profile
    this.navCtrl.push(ProfilePage,{
      "fullname":this.profileData.fullname,
      "email":this.profileData.email,
      "tel":this.profileData.tel
    });
  }
}
