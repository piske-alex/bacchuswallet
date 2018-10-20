import { Injectable } from '@angular/core';
import {Observable, of, Subject} from 'rxjs';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import {CookiesService} from './cookies.service';
import {localtest} from './constants/serverconfig';

export const BASEAPI = 'http://api.bacc.tech:3030/api/v1/';


export class User {
  ID: number;
  Email: string;
  PwHash: string;
  APIKey: string ;
  Pub:   string ;
  Priv: string ;
  Mobile: string ;
}

export class AuthData {
  email: string;
  password: string;
  otp: string;
}

export const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})
};


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private heroesUrl = BASEAPI + 'account/login/';  // URL to web api\

  loginbool: Observable<boolean>;
  private boolSubject: Subject<boolean>;

  constructor(
    private http: HttpClient,
    private cookies: CookiesService,
     ) {  }

  user_logged_in: boolean;
  user_login_failed: boolean;
  authData: AuthData;

  logout(): void {
    this.cookies.deleteCookie('usr');
    this.cookies.deleteCookie('loggedinonce');
    location.reload();
  }

  static getFormUrlEncoded(toConvert) {
    const formBody = [];
    for (const property in toConvert) {
      const encodedKey = encodeURIComponent(property);
      const encodedValue = encodeURIComponent(toConvert[property]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    return formBody.join('&');
  }

  auth(email: string, password: string, otp: string): Observable<User> {

    return this.http.get(this.heroesUrl + email + '/' + password + '/' + otp, httpOptions).pipe(
      tap((user: User) => {
        console.log(LoginService.getFormUrlEncoded(this.authData));
        this.cookies.setCookie('usr', JSON.stringify(user), 1);
      }),
      catchError(this.handleError<User>('fetchuser'))
    );


  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      //this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
