import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { ArticlesComponent } from './articles/articles.component';
import { InfoComponent } from './info/info.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HeaderComponent } from './header/header.component';

import { ArticlesGet } from './services/articles.service';

@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    InfoComponent,
    NavigationComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [ArticlesGet],
  bootstrap: [AppComponent]
})
export class AppModule { }
