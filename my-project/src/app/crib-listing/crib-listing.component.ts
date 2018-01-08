import { Component, OnInit } from '@angular/core';
import { cribsData } from  './../data/cribs'


@Component({
  selector: 'app-crib-listing',
  templateUrl: './crib-listing.component.html',
  styleUrls: ['./crib-listing.component.css']
})
export class CribListingComponent implements OnInit {

	/* Local creation of the array with any types */
	/* Asign to cribsData data */
	cribs: Array<any> = cribsData;

	constructor() { }

	ngOnInit() {
	}

}
