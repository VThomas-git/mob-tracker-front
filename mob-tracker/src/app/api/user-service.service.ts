import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
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

    const body = new HttpParams()
      .set('studentName', name)
      .set('prom', String(prom))
      .set('city', city)
      .set('destinationCountry', country)
      .set('beginDate', begin)
      .set('endDate', end);

    return this.httpAPI.post('https://localhost:8080/mobilities', body.toString())
      .pipe(
        tap((response: any) => {
          localStorage.setItem('createdAt', response?.createdAt);
        }),
        map((response: any) => !!response?.createdAt),
        catchError(() => of(false))
      );
  }
}
