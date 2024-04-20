import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  count:any= 0;

  incrementBtn(){
    let audio = new Audio();
    audio.src = "/assets/audio/incsound.mp3"
    audio.load
    audio.play()
    this.count++

  }
  decrementBtn(){
    let audio = new Audio();
    audio.src = "/assets/audio/decbtn.mp3"
    audio.load
    audio.play()
    if(this.count==0){
      this.count

    }
    else{
      this.count--
    }
  }
  resetBtn(){
    let audio = new Audio();
    audio.src = "/assets/audio/resetsound.mp3"
    audio.load
    audio.play()
    this.count= 0;
  }
}
