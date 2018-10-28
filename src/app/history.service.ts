import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {BASEAPI, httpOptions, User} from './login.service';
import {HttpClient} from '@angular/common/http';
import {StandardResponse} from './wallet.service';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor(private http: HttpClient) { }

  auth(apikey:string): Observable<StandardResponse> {

    return this.http.get<StandardResponse>("http://api.etherscan.io/api?module=account&action=txlist&address="+apikey+"&startblock=0&endblock=99999999&sort=asc&apikey=YMHDHW84RT1GJQBM9V44J3F59VXGIFSGMK", httpOptions).pipe(
      catchError(this.handleError<StandardResponse>('fetchhistory'))
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
