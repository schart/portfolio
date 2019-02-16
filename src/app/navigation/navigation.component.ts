import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor() { }
  sort(tag){/* 
    if (tag == ""){
    document.querySelector(".headerImages").classList.remove("hide")
    }else{
      console.log("hiya")
      let headerImages: HTMLElement = document.querySelector(".headerImages") as HTMLElement;
      headerImages.classList.add("hide")
    } */
    if (window.location.pathname == "/"){
      if (document.querySelector(".dateShowall") != null){
        let element: HTMLElement = document.querySelector(".dateShowall") as HTMLElement;
        element.click();
      }
      var articles = document.getElementsByTagName("article");
      let topOfArticles = document.getElementById("topOfArticles");
      let actives = document.querySelectorAll(".active");
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
      if (document.querySelector(".currentYear") != null){
        document.querySelector(".currentYear").classList.remove("currentYear");
      }
      for (var i = 0; i < actives.length; i++){
        actives[i].classList.remove("active");
      }
      topOfArticles.scrollIntoView({ behavior: 'smooth',block: "start", inline: "nearest"});
    }
  }
  sortDate(year){/* 
    if (year == ""){
      console.log("Showing all")
      document.querySelector(".headerImages").classList.remove("hide")
     }else{ document.querySelector(".headerImages").classList.add("hide") } */
    if (window.location.pathname == "/"){
      if (document.querySelector(".tagsShowall") != null){
        let element: HTMLElement = document.querySelector(".tagsShowall") as HTMLElement;
        element.click();
      }
      var articles = document.getElementsByTagName("article");
      let actives = document.querySelectorAll(".active");
      let topOfArticles = document.getElementById("topOfArticles");
      if (document.querySelector(".currentYear") != null){
          document.querySelector(".currentYear").classList.remove("currentYear");
      }
      if (document.querySelector(".current") != null){
          document.querySelector(".current").classList.remove("current");
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
      for (var i = 0; i < actives.length; i++){
        actives[i].classList.remove("active");
      }
      topOfArticles.scrollIntoView({ behavior: 'smooth',block: "start", inline: "nearest"});
    }
  }
  ngOnInit() {
  }

}
