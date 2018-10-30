import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {BASEAPI, httpOptions, User} from './login.service';
import {catchError, tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {CookiesService} from './cookies.service';

@Injectable({
  providedIn: 'root'
})
export class KYCService {

  constructor(private http: HttpClient, private cookies:CookiesService) { }

  auth(apikey, name, idnum, country, age): Observable<Object> {

    // let refid = RegisterService.getParameterByName('refid', null) || '10099'
    return this.http.get(BASEAPI + 'account/KYC/' + apikey + '/' + name + '/' + idnum + '/' + country + '/' + age, httpOptions).pipe(
      tap((user: User) => {
        // console.log(LoginService.getFormUrlEncoded(this.authData));
        this.cookies.setCookie('usr', JSON.stringify(user), 1);
      }),
      catchError(this.handleError<Object>('fetchhistory'))
    );



  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
