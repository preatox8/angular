import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../shared/domain/collegue';
import { Output } from '@angular/core/src/metadata/directives';
import { EventEmitter, Key } from 'selenium-webdriver';

import { CollegueService } from '../shared/service/collegue.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-un-collegue-component',
  templateUrl: './un-collegue-component.component.html',
  styleUrls: ['./un-collegue-component.component.css']
})
export class UnCollegueComponentComponent implements OnInit {

  @Input() collegue:Collegue;


  constructor(private collegueService:CollegueService) { }

  ngOnInit(){

  }


  jaime(){
   /* this.collegueService.aimerUnCollegue(this.collegue).then(tabCollegues => {
      
    });*/
    this.collegue.score += 10;

  }

  jedeteste(){
      // événement clic sur le bouton "Je déteste"
      // => le score du collègue est diminué de 5
      this.collegue.score -= 5;
  }

  

}
