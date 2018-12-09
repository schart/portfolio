import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  openContact(){
    document.querySelector("header").classList.add("contactSection");
  }
  cancelContact(){
    document.querySelector("header").classList.remove("contactSection");
  }
  doContact(){
    var messageSelector: HTMLInputElement = document.querySelector(".senderBody") as HTMLInputElement;
    var senderSelector: HTMLInputElement = document.querySelector(".senderEmail") as HTMLInputElement;
    var message = messageSelector.value;
    var senderEmail = senderSelector.value;
    console.log(message + "\n\nFrom: " + senderEmail);
  }
  constructor() { }
  darkMode(){
    var dm: boolean = (localStorage.getItem("hm-dm-0097") == "true");
    if (localStorage.getItem("hm-dm-0097") == null){
      localStorage.setItem("hm-dm-0097", "true");
    }else{
      var ndm = new Boolean(!dm);
      localStorage.setItem("hm-dm-0097", ndm.toString());
    }
    document.body.classList.toggle("darkMode");
  }
  ngOnInit() {
  }

}
