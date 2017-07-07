import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class HolidayService {

  private holidaysUrl = 'https://holidayapi.com/v1/holidays?key=de5b998b-8778-4439-ab33-42d0bcbb214b&country=US&year=2015';

  constructor(private http: Http) {};

  getHolidays(payload): Observable<any> {
    if (payload != null) {
      this.holidaysUrl = this.holidaysUrl + payload;
    }
    return this.http.get(this.holidaysUrl)
                    .map(this.extractData)
                    .catch(this.handleError);

  }
private extractData(response: Response) {
    const body = response.json();

    return  body;
  }
private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
