import { Component, OnInit } from '@angular/core';
import { Collegue } from '../shared/domain/collegue';
import { CollegueService } from '../shared/service/collegue.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';



@Component({
  selector: 'app-classique-collegue',
  templateUrl: './classique-collegue.component.html',
  styleUrls: ['./classique-collegue.component.css']
})
export class ClassiqueCollegueComponent implements OnInit {
  size: number = 10;
  letter: string = "";
  collegues: Collegue[] = [];

  constructor(private collegueService: CollegueService) {
    
  }

  ngOnInit() {
    //recuperer la lister
    this.collegueService.listerCollegues().subscribe(tabCollegues => {
      this.collegues = tabCollegues
    });

    //MAJ la liste
    this.collegueService.getObserversubject().subscribe(collegue => { this.collegues.push(collegue) });
  }

  onChangeSize(filtreNombre: HTMLInputElement) {
    this.size = Number.parseInt(filtreNombre.value);
  }

  onFilterPseudo(filtrePseudo: HTMLInputElement) {
    this.letter = filtrePseudo.value;
  }

}
