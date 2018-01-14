import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

// service
import { CribsService } from './../services/cribs.service';
import { UtilService } from './../services/util.service';

import { SortByPipe } from '../pipes/sort-by.pipe';
import { Crib } from './../crib';


@Component({
  selector: 'app-crib-listing',
  templateUrl: './crib-listing.component.html',
  styleUrls: ['./crib-listing.component.css']
})
export class CribListingComponent implements OnInit {

	// Initializing
	cribs: Array<Crib> = [];
	error: string = '';
	sortField: string = 'price';
	sortDirection: string = 'asc';
	sortFields: Array<string> = [
		'address',
		'area',
		'bathrooms',
		'bedrooms',
		'price',
		'type'
	];

	// injecting private instance of the http
	// injecting the service cribsService
	constructor(
		private cribsService: CribsService,
    	private utilService: UtilService
	) { }

	ngOnInit() {

		// make a http request from calling the method from service			
		this.cribsService.getAllCribs()
			// observabels
			.subscribe(
				data => this.cribs = data,
				error => this.error = error.statusText
			);
		this.cribsService.newCribSubject.subscribe(
	      data => this.cribs = [data, ...this.cribs]
	    );
	}

}
