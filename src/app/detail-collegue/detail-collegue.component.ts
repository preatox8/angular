import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../shared/domain/collegue';
import { CollegueService } from '../shared/service/collegue.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Aviscollegue } from '../shared/domain/aviscollegue';


@Component({
  selector: 'app-detail-collegue',
  templateUrl: './detail-collegue.component.html',
  styleUrls: ['./detail-collegue.component.css']
})
export class DetailCollegueComponent implements OnInit {

  collegue: Collegue;
  aviscollegues: Aviscollegue[] = [];
  pseudo: string;


  constructor(private collegueService: CollegueService, private route: ActivatedRoute) {
    route.params.subscribe(params => { this.pseudo = params['pseudo']; });
  }

  ngOnInit(): void {
    this.collegueService.afficherUnCollegue(this.pseudo).subscribe(c => this.collegue = c)
    this.collegueService.afficherAvisUnCollegue(this.pseudo)
    .subscribe(c => {
      this.aviscollegues = c
    });
  }

  jaime() {
    this.collegueService.aimerUnCollegue(this.collegue).subscribe(tabCollegues => {
      this.collegue.score = tabCollegues.score;
    });
  }

  jedeteste() {
    this.collegueService.detesterUnCollegue(this.collegue).subscribe(tabCollegues => {
      this.collegue.score = tabCollegues.score;
    });
  }


}
