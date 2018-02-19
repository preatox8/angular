import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../shared/domain/collegue';
import { CollegueService } from '../shared/service/collegue.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-carrousel-collegue',
  templateUrl: './carrousel-collegue.component.html',
  styleUrls: ['./carrousel-collegue.component.css']
})
export class CarrouselCollegueComponent implements OnInit {

  collegue: Collegue;
  size:number = 10;
  letter:string = "";
  collegues:Collegue[] = [];

  constructor(private collegueService: CollegueService) { }

  ngOnInit() {
    this.collegueService.listerCollegues().then(tabCollegues => {
      this.collegues = tabCollegues
    });
  }

  jaime() {
    this.collegueService.aimerUnCollegue(this.collegue).then(tabCollegues => {
      this.collegue.score = tabCollegues.score;
    });
  }

  jedeteste() {
    this.collegueService.detesterUnCollegue(this.collegue).then(tabCollegues => {
      this.collegue.score = tabCollegues.score;
    });
  }

  onChangeSize(filtreNombre:HTMLInputElement) {
    this.size = Number.parseInt(filtreNombre.value);
  }

  onFilterPseudo(filtrePseudo:HTMLInputElement) {
   this.letter = filtrePseudo.value;
  }

}
