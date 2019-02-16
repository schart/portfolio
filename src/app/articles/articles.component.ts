import { Component } from '@angular/core';
import { UserGet } from '../services/users.service';
import { ArticlesGet } from '../services/articles.service';
import { windowWhen } from 'rxjs/operators';
/* import { ConsoleReporter } from 'jasmine'; */

@Component({
  selector: 'articles',
  providers: [UserGet],
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent {
  
  users;
  articles;
  customArray;
  match;
  matchLink;
  strippedArticles;
  constructor(private articleGet: ArticlesGet){
      this.articles = [];
      this.strippedArticles = [];
      this.match = /src="([^\\"]*)" \/>/iu;
      this.matchLink = /href="([^\\"]*)"/iu;
      this.articleGet.getArticles().subscribe(articles => {
        console.log(articles);
        var counter = 0;
        for (var i = 0; i < articles.length; i++){
          var body = articles[i].body;
          var date = articles[i].date;
          var day = date.substring(8, 10);
          var month = date.substring(5, 7);
          var year = date.substring(0,4);
          date = day + "/" + month + "/" + year
          var tags = JSON.parse(articles[i].tags);
          var title = articles[i].title;
          this.articles.push({
            body: body,
            date: date,
            tags: tags,
            title: title,
            id: articles[i].id
          });
          if (body.match(this.match)){
            let nnlink = "#" + articles[i].id;
            if (body.match(this.matchLink)){
              nnlink = body.match(this.matchLink)[1]
            }
            this.strippedArticles.push({
              body: body.match(this.match)[1],
              link: nnlink,
              id: articles[i].id
            })
          }
        }
        if (window.location.hash.startsWith("#/")){
          var hash = window.location.hash;
          var skimmed = hash.substring(2);
          setTimeout(function(){
            let tempTargEl : HTMLElement = document.querySelector(`[data-test='${skimmed}']`) as HTMLElement;
            tempTargEl && tempTargEl.click();
          }, 500);
        }else if (window.location.hash.startsWith("#&")){
          var value = window.location.hash.substring(2);
          history.replaceState("", document.title, window.location.pathname
                                                           + window.location.search);
          if (value == "messageSent"){
            var pText: HTMLElement = document.querySelector("header > div p") as HTMLElement;
            pText.innerHTML = "Message was sent.";
            pText.style.color = "#a7f1a7";
            setTimeout(function(){
              pText.innerHTML = "['hɔ:kʊn] - I ❤ Front-end.";
              pText.style.color = "#f9f9f9";
            }, 2500);
          }else if (value == "messageFailed"){
            console.log("Oh no!");
          }
        }else if(window.location.hash.startsWith("#")){
          var id = window.location.hash.substring(1);
          history.replaceState("", document.title, window.location.pathname
                                                           + window.location.search);
          setTimeout(function(){
            document.querySelector("[data-articleindex='" + id + "']").scrollIntoView({ behavior: 'smooth',block: "start", inline: "nearest"});
            let child: HTMLElement = document.querySelector("[data-articleid='" + id + "']").childNodes[0] as HTMLElement;
            if (child != null){
              child.click();
            }
          }, 900);
        }
        this.customArray = articles;
        /* Load promo images */
        
      });
  }
  openArticle(id, promo){
    console.log(id);
    if (promo == "promo"){
      let showAll: HTMLElement = document.querySelector(".showAll") as HTMLElement;
      showAll.click();
    }
    window.location.hash = "#" + id;
    var parent = document.querySelector("[data-articleIndex='" + id + "']");
    var changeOrDont = true;
    if (parent.classList.contains("active")){
      
    }else{
      changeOrDont = false;
    }
    /* add body */
    function search(nameKey, myArray){
      for (var i=0; i < myArray.length; i++) {
          if (myArray[i].id == nameKey) {
              return myArray[i];
          }
      }
    }
    var body = search(id, this.articles).body;
    //var body = this.articles[id].body;
    console.log(body);
    document.querySelector("[data-articleindexbody='" + id + "'").innerHTML = body;
    /* 
    var lights = document.getElementsByClassName("active");
    while (lights.length){
      lights[0].classList.remove("active");
    } */
  
    if (changeOrDont){
      parent.classList.remove("active");
      history.replaceState("", document.title, window.location.pathname
                                                       + window.location.search);
    }else{
      parent.scrollIntoView({ behavior: 'smooth',block: "start", inline: "nearest"});
      setTimeout(() => {
        parent.classList.add("active");
      }, 500);
     /*  document.body.scrollTop = 0;document.documentElement.scrollTop = 0;
     */}
  }
}