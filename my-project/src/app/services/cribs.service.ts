import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Subject } from 'rxjs/Subject';
// transform the value that comes from http request
// so we can use .map function call operator
import 'rxjs/add/operator/map';

@Injectable()
export class CribsService {

  public newCribSubject = new Subject<any>();

  constructor(private http: Http) { }


  getAllCribs() {
  	// returns a http request
  	return this.http.get("data/cribs.json")
  					// whatever we gets from server we maped as json 
  					.map(res => res.json());
  }

  addCrib(data) {
    data.image = 'default-crib';
    this.newCribSubject.next(data);
  }

}
