import { by } from 'protractor';
import { Component, OnInit, Input } from '@angular/core';
import { Crib } from './../crib';

@Component({
  selector: 'app-crib-card',
  templateUrl: './crib-card.component.html',
  styleUrls: ['./crib-card.component.css']
})
export class CribCardComponent implements OnInit {

	/* Input called crib asign it to property called crib assign to any type */
	/* Accept binding called crib and assign it to a local property here called crib as well */
	@Input('crib') crib: Crib;

	constructor() { }

	ngOnInit() {
		
	}

}
