import { Component } from '@angular/core';
import { Collegue } from './shared/domain/collegue';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { CollegueService } from './shared/service/collegue.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 
  collegues:Collegue[];
  afficheralert:boolean = false;

  constructor(private collegueService:CollegueService) {

  }
 
  ngOnInit(){
    this.collegueService.listerCollegues().then(tabCollegues => {
      this.collegues = tabCollegues
    });

  }

  add(pseudo:HTMLInputElement, imageUrl:HTMLInputElement){
      this.afficheralert = true;
      this.collegueService.sauvegarder(new Collegue(pseudo.value, imageUrl.value, 0)).then(
        colleg => this.collegues.push(colleg)
      )
      return false;
  }

}
