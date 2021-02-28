import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {Mobility} from '../shared/mobility.model';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private targetUrl = '/mobilities';
  private option = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
    })
  };

  constructor(
    public httpAPI: HttpClient
  ) {
  }

  create(mobility: Mobility) {

    return this.httpAPI.post(this.targetUrl, mobility, this.option)
      .pipe(
        tap((response: any) => {
          console.log(response.toString());
        }),
        map((response: any) => !!response?.createdAt),
        catchError(() => of(false))
      );
  }

  readMobilitiesList() {
    return this.httpAPI.get(this.targetUrl)
      .pipe(
        map((response: any) => response?._embedded.mobilities)
      );
  }

  updateMobility(mobility: Mobility, id: string): Observable<Mobility> {
    return this.httpAPI.put<Mobility>(this.targetUrl + `/${id}`, mobility, this.option)
      .pipe(
        tap((response: any) => {
          console.log(response.toString());
        }),
      );
  }

  deleteMobility(id: string) {
    return this.httpAPI.delete(this.targetUrl + `/${id}`)
      .pipe(
        map((response: any) => response?.data)
      );
  }
}
