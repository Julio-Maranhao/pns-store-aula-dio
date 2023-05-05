import { Injectable } from '@angular/core';
import { game } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class GamesDatabaseService {

	gameList:Array<game> = [
		{
			cover:'ac-cover.jpg',
			label:'GOTY',
			price:'R$ 299,99',
			type:'Digital | PS4',
		},
		{
			cover:'bt-1.jpg',
			label:'Exclusive',
			price:'R$ 199,90',
			type:'Digital | PS4',
		},
		{
			cover:'bt-4.jpg',
			label:'',
			price:'R$ 159,90',
			type:'Digital | PS5 | PS4',
		},
		{
			cover:'bt-5.jpg',
			label:'Exclusive',
			price:'R$ 299,90',
			type:'Digital | PS5 | PS4',
		},
		{
			cover:'bt-bad-company-2.jpg',
			label:'Collector',
			price:'R$ 599,90',
			type:'Media | PS4 | PS5 | PC',
		},
		{
			cover:'bt-hardline.jpg',
			label:'Digital',
			price:'R$ 129,90',
			type:'Digital | PS4',
		},
	]

  constructor() { }
}
