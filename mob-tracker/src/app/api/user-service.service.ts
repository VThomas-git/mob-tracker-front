import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {Mobility} from '../shared/mobility.model';

const targetUrl = '/mobilities';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(
    public httpAPI: HttpClient
  ) {
  }

  create(mobility: Mobility) {

    const option = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        // 'Content-Type': 'alication/x-www-form-urlencoded'
      })
    };

    return this.httpAPI.post(targetUrl, mobility, option)
      .pipe(
        tap((response: any) => {
          console.log(response.toString());
        }),
        map((response: any) => !!response?.createdAt),
        catchError(() => of(false))
      );
  }

  readMobilitiesList() {
    return this.httpAPI.get(targetUrl)
      .pipe(
        map((response: any) => response?._embedded.mobilities)
      );
  }

  readMobilityDetail(id: number): Observable<any> {
    return this.httpAPI.get(targetUrl + `/${id}`)
      .pipe(
        map((response: any) => response?.data)
      );
  }

  deleteMobility(id: string) {
    return this.httpAPI.delete(targetUrl + `/${id}`)
      .pipe(
        map((response: any) => response?.data)
      );
  }
}
