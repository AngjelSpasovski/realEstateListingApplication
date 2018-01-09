import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
// transform the value that comes from http request
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-crib-listing',
  templateUrl: './crib-listing.component.html',
  styleUrls: ['./crib-listing.component.css']
})
export class CribListingComponent implements OnInit {

	// Initializing
	cribs: Array<any>;
	error: string;

	// private instance of the http
	constructor(private http: Http) { }

	ngOnInit() {

		// make a http request			
		this.http.get("data/cribs.json")
			// whatever we gets we maped as json
			.map(res => res.json())
			// observabels
			.subscribe(
				data => this.cribs = data,
				error => this.error = error.statusText
			);
	}

}
