import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, of} from 'rxjs';
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

    // const targetUrl = environment.apiUrl + '/mobilities';
    const targetUrl = '/mobilities';

    const body = new HttpParams()
      .set('studentName', name)
      .set('prom', String(prom))
      .set('city', city)
      .set('destinationCountry', country)
      .set('beginDate', begin)
      .set('endDate', end);

    const option = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };

    return this.httpAPI.post(targetUrl, body, option)
      .pipe(
        tap((response: any) => {
          localStorage.setItem('createdAt', response?.createdAt);
          console.log(response.toString());
        }),
        map((response: any) => !!response?.createdAt),
        catchError(() => of(false))
      );
  }

  readMobilitiesList() {
    const targetUrl = '/mobilities';

    return this.httpAPI.get(targetUrl)
      .pipe(
        map((response: any) => response?._embedded.mobilities)
      );
  }

  readMobilityDetail(id: number): Observable<any> {
    const targetUrl = '/mobilities';
    return this.httpAPI.get(targetUrl + `/${id}`)
      .pipe(
        map((response: any) => response?.data)
      );
  }

  deleteMobility(id: number) {
    const targetUrl = '/mobilities';
    return this.httpAPI.delete(targetUrl + `/${id}`)
      .pipe(
        map((response: any) => response?.data)
      );
  }
}
