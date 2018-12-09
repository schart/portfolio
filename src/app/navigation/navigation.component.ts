import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor() { }
  sort(tag){
    if (window.location.pathname == "/"){
      if (document.querySelector(".dateShowall") != null){
        let element: HTMLElement = document.querySelector(".dateShowall") as HTMLElement;
        element.click();
      }
      var articles = document.getElementsByTagName("article");
      if (document.querySelector(".current") != null){
        document.querySelector(".current").classList.remove("current");
      }
      document.querySelector("a[data-test='" + tag + "']").classList.add("current");
      for (var i = 0; i < articles.length; i++) {
        let childNod = <HTMLElement> articles[i].childNodes[3];
        if (childNod.innerHTML.indexOf(tag) > 0){
          articles[i].classList.remove("hide");
        }else{
          articles[i].classList.add("hide");
        }
          
      }​
    }
  }
  sortDate(year){
    if (window.location.pathname == "/"){
      if (document.querySelector(".tagsShowall") != null){
        let element: HTMLElement = document.querySelector(".tagsShowall") as HTMLElement;
        element.click();
      }
      var articles = document.getElementsByTagName("article");
      if (document.querySelector(".currentYear") != null){
        document.querySelector(".currentYear").classList.remove("currentYear");
      }
      document.querySelector("a[data-test='" + year + "']").classList.add("currentYear");
      for (var i = 0; i < articles.length; i++) {
        let childNod = <HTMLElement> articles[i].childNodes[3];
        if (childNod.innerHTML.indexOf("/" + year) > 0){
          articles[i].classList.remove("hide");
        }else{
          articles[i].classList.add("hide");
        }
          
      }​
    }
  }
  ngOnInit() {
  }

}
