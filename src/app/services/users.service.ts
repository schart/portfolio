import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {map} from 'rxjs/operators';

@Injectable()
export class UserGet {
    constructor(private http: Http){
        /* console.log("Gettings users..."); */
    }
    getUsers(){
        return this.http.get("//jsonplaceholder.typicode.com/users")
        .pipe(map(res => res.json()));
    }
}