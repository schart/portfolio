import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {map} from 'rxjs/operators';

@Injectable()
export class ArticlesGet {
    constructor(private http: Http){
        /* console.log("Gettings users..."); */
    }
    getArticles(){
        return this.http.get("https://impedans.me/api/devblog/index.php")
        .pipe(map(res => res.json()));
    }
}