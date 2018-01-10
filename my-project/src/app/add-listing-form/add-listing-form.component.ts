import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-listing-form',
  templateUrl: './add-listing-form.component.html',
  styleUrls: ['./add-listing-form.component.css']
})
export class AddListingFormComponent implements OnInit {

	//propertyTypes: Array<string> = ['Condo', 'Duplex', 'House'];
	propertyType: string = "Condo";

	constructor() { }

	ngOnInit() {
	}

	/*Submit Function*/
	/*:void means that we are not returning anything from this function*/
	onCribSubmit(data): void {
		console.log(data);
	}

}
