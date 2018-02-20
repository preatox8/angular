import { Component, OnInit } from '@angular/core';
import { Collegue } from '../shared/domain/collegue';
import { Avis } from '../shared/domain/avis';
import { CollegueService } from '../shared/service/collegue.service';
import { NgClass } from '@angular/common/src/directives/ng_class';


@Component({
  selector: 'app-votre-dernier-avis',
  templateUrl: './votre-dernier-avis.component.html',
  styleUrls: ['./votre-dernier-avis.component.css']
})
export class VotreDernierAvisComponent implements OnInit {

  nom: string
  texte: string = "Aucun vote";
  choix: boolean;
  className: string = 'alert alert-secondary';

  constructor(private collegueService: CollegueService) { }

  ngOnInit() {
    this.collegueService.getcollegueAvis().subscribe(avisobject => {
      this.nom = avisobject.nom
      this.choix = avisobject.avis

      if (this.choix == false) {
        this.className = 'alert alert-danger';
        this.texte = 'Je déteste ' + this.nom;
      } else if (this.choix == true) {
        this.className = 'alert alert-primary';
        this.texte = 'J\'aime ' + this.nom;
      }
    })
  }
  



}
