import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../shared/domain/collegue';

@Component({
  selector: 'app-un-collegue-component',
  templateUrl: './un-collegue-component.component.html',
  styleUrls: ['./un-collegue-component.component.css']
})
export class UnCollegueComponentComponent implements OnInit {

  @Input() collegue:Collegue;

  constructor() { }

  jaime(){
      // événement clic sur le bouton "J'aime"
      // => le score du collègue est augmenté de 10
      this.collegue.score += 10;
  }

  jedeteste(){
      // événement clic sur le bouton "Je déteste"
      // => le score du collègue est diminué de 5
      this.collegue.score -= 5;
  }

  ngOnInit() {
  }

}
