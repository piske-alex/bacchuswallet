import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {BASEAPI, httpOptions} from './login.service';
import {catchError} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  auth(email, phone): Observable<Object> {

    return this.http.get(BASEAPI + 'account/register/'+email+'/'+phone, httpOptions).pipe(
      catchError(this.handleError<Object>('fetchhistory'))
    );
  }

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
