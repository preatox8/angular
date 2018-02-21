import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../shared/domain/collegue';
import { Output } from '@angular/core/src/metadata/directives';
import { EventEmitter, Key } from 'selenium-webdriver';
import { CollegueService } from '../shared/service/collegue.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AviscollegueComponent } from '../aviscollegue/aviscollegue.component';
import { Aviscollegue } from '../shared/domain/aviscollegue';


@Component({
  selector: 'app-tableau-collegue',
  templateUrl: './tableau-collegue.component.html',
  styleUrls: ['./tableau-collegue.component.css']
})
export class TableauCollegueComponent implements OnInit {

  size: number = 10;
  letter: string = "";
  collegues: Collegue[] = [];
  pseudo: string; 
  @Input() collegue: Collegue;

  constructor(private collegueService: CollegueService, private modalService: NgbModal) {
  }

  ngOnInit() {
    //recuperer la lister
    this.collegueService.listerCollegues().subscribe(tabCollegues => {
      this.collegues = tabCollegues
    });

    //MAJ la liste
    this.collegueService.getObserversubject().subscribe(collegue => { this.collegues.push(collegue) });

  }

  
  open(collegue:Collegue) {
    const modalRef = this.modalService.open(AviscollegueComponent);
   
    modalRef.componentInstance.name = collegue.pseudo;
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

  onChangeSize(filtreNombre: HTMLInputElement) {
    this.size = Number.parseInt(filtreNombre.value);
  }

  onFilterPseudo(filtrePseudo: HTMLInputElement) {
    this.letter = filtrePseudo.value;
  }

}
