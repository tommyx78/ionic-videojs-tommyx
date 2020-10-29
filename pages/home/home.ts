import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('vid') vidElement: ElementRef;
  constructor(public navCtrl: NavController) {

  }

  playVid(){
    let abc = document.querySelector('.video-js');
    const bottomTabs = document.querySelector(".show-tabbar");
    if(abc.requestFullscreen){
      abc.requestFullscreen();
    } else if (abc.webkitRequestFullscreen){
      abc.webkitRequestFullscreen();
      abc.setAttribute('controls', '');
      bottomTabs.style.display = 'none';
    }
    console.log(abc);
  }

}
