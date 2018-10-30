import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {BASEAPI, httpOptions} from './login.service';
import {catchError} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) { }

  static getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }
  // @ts-ignore
  auth(email, phone, pw): Observable<Object> {

      let refid = RegisterService.getParameterByName('refid', null) || '10099'
      return this.http.get(BASEAPI + 'account/register/' + email + '/' + phone + '/' + refid + '/' + pw, httpOptions).pipe(
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
