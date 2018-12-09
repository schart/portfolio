import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

enableProdMode();
if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


  window.onhashchange = function() {
    if (window.location.hash.startsWith("#")){
      console.log("Opening " + window.location.hash.split("#")[1]);
      openArticle(window.location.hash.split("#")[1]);
    }
   }
   if (localStorage.getItem("hm-dm-0097") == "true"){
     document.body.classList.add("darkMode");
   }
   var counter = 0;
   window.addEventListener("scroll", function() {
    var elementTarget: HTMLElement = document.querySelector(".belowHeadDiv") as HTMLElement;
    var toggleElement: HTMLElement = document.querySelector(".goUpButton") as HTMLElement;
        if (window.scrollY > (elementTarget.offsetTop + elementTarget.offsetHeight)) {
          var toggleHeader = function(){
            toggleElement.classList.add("showUp");
            counter++;
          }
          counter < 1 && toggleHeader(); 
        }else if(counter == 1 && window.scrollY < (elementTarget.offsetTop + elementTarget.offsetHeight)){
          toggleElement.classList.remove("showUp");
          counter = 0;
        }
  });
   var openArticle = function(id){
    console.log(id);
    window.location.hash = "#" + id;
    var parent = document.querySelector("[data-articleid='" + id + "']").parentElement;
    var changeOrDont = true;
    if (parent.classList.contains("active")){
      
    }else{
      changeOrDont = false;
    }
    /* var lights = document.getElementsByClassName("active");
    while (lights.length){
      lights[0].classList.remove("active");
    } */
    if (changeOrDont){
      parent.classList.remove("active");
      history.replaceState("", document.title, window.location.pathname
                                                       + window.location.search);
    }else{
      parent.classList.add("active");
      parent.scrollIntoView({ behavior: 'smooth',block: "start", inline: "nearest"});
     /*  document.body.scrollTop = 0;document.documentElement.scrollTop = 0;
     */}
  }