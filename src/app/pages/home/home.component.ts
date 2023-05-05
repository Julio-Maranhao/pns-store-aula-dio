import { Component } from '@angular/core';
import { GamesDatabaseService } from 'src/app/services/games-database.service';
import { game } from '../../models/models'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

	gamesList:Array<game> = this.service.gameList

	constructor(private service: GamesDatabaseService){}

}
