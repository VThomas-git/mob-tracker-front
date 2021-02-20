import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(
    public httpAPI: HttpClient
  ) {
  }

  create(name: string, prom: number, country: string, city: string, begin: string, end: string) {


    const targetUrl = 'http://localhost:8080/mobilities';

    const body = new HttpParams()
      .set('studentName', name)
      .set('prom', String(prom))
      .set('city', city)
      .set('destinationCountry', country)
      .set('beginDate', begin)
      .set('endDate', end);

    const option = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })
    };

    return this.httpAPI.post(targetUrl, body.toString(), option)
      .pipe(
        tap((response: any) => {
          localStorage.setItem('createdAt', response?.createdAt);
        }),
        map((response: any) => !!response?.createdAt),
        catchError(() => of(false))
      );
  }
}
