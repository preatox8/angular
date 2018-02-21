import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Collegue } from '../shared/domain/collegue';

import { CollegueService } from '../shared/service/collegue.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Aviscollegue } from '../shared/domain/aviscollegue';
import { Avis } from '../shared/domain/avis';



@Component({
  selector: 'app-aviscollegue',
  template: `
  <div class="modal-header">
    <h4 class="modal-title">Votre Avis</h4>
    <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <form (ngSubmit)="submit(monForm.value)" #monForm="ngForm">
    <div class="modal-body">
      <strong>Que pensez-vous de {{ name }} ?</strong>

      <textarea #commentaire="ngModel" class="form-control"
          style="width:100%; height:150px;"
          required minlength="10"
          required maxlength="255"
          [(ngModel)]="avissurcollegue.avis" 
          [ngModelOptions]="{standalone: true}"
          required>
      </textarea>
      <br>

      <div *ngIf="commentaire.invalid && (commentaire.dirty || commentaire.touched)"class="alert alert-danger">
        <div *ngIf="commentaire.errors.required">
            Un commentaire est obligatoire    
        </div>
        <div *ngIf="commentaire.errors.minlength">
            Le commentaire doit avoir 10 caractères minumum
        </div>
      </div>

    </div>
    <div class="modal-footer">
      <button class="btn btn-primary" [disabled]="commentaire.invalid" type="submit">Enregistrer</button>
    </div>
  </form>
`,
  styleUrls: ['./aviscollegue.component.css']
})
export class AviscollegueComponent implements OnInit {

  @Input() name;
  avissurcollegue: Aviscollegue = new Aviscollegue("", this.name);

  constructor(private collegueService: CollegueService, public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  submit() {
    console.log(this.avissurcollegue);
    this.collegueService.sauvegardercommentaire(new Aviscollegue(this.avissurcollegue.avis, this.name))
      .subscribe(
      avis => this.avissurcollegue
      )
    //eviter rechargement page
    return false;
  }

}
