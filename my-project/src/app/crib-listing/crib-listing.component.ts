import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

// service
import { CribsService } from './../services/cribs.service';

@Component({
  selector: 'app-crib-listing',
  templateUrl: './crib-listing.component.html',
  styleUrls: ['./crib-listing.component.css']
})
export class CribListingComponent implements OnInit {

	// Initializing
	cribs: Array<any>;
	error: string;

	// injecting private instance of the http
	// injecting the service cribsService
	constructor(
		private http: Http, 
		private cribsService: CribsService
	) { }

	ngOnInit() {

		// make a http request from calling the method from service			
		this.cribsService.getAllCribs()
			// observabels
			.subscribe(
				data => this.cribs = data,
				error => this.error = error.statusText
			);
	}

}
