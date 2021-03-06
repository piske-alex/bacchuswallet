import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {BASEAPI, httpOptions} from './login.service';
import {catchError} from 'rxjs/operators';

export class StandardResponse{
  status:any;
  message:any;
  result:any;
}



@Injectable({
  providedIn: 'root'
})
export class WalletService {

  private http1Options: {
    headers?: HttpHeaders,
    observe?: 'body',
    params?: HttpParams,
    reportProgress?: boolean,
    responseType: 'text',
    withCredentials?: boolean
  } = {
    headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' }),
    params: new HttpParams(),
    responseType: 'text'
  };

  constructor(private http: HttpClient) { }

  auth(user:any): Observable<StandardResponse> {

    return this.http.get<StandardResponse>("https://api.etherscan.io/api?module=account&action=balance&address="+user.Pub+"&tag=latest&apikey=%20YMHDHW84RT1GJQBM9V44J3F59VXGIFSGMK", httpOptions).pipe(
      catchError(this.handleError<StandardResponse>('fetchhistory'))
    );
  }

  sendtransaction(apikey, size:number, dest): Observable<Object>{
    return this.http.get(BASEAPI + 'trade/createorder/'+apikey+'/'+size+'/'+dest, this.http1Options).pipe(
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
