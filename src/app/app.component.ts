import { Component } from '@angular/core';
import { Collegue } from './shared/domain/collegue';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { CollegueService } from './shared/service/collegue.service';
import { Output } from '@angular/core/src/metadata/directives';

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
   
  }

  //ajouter collegue
  add(pseudo:HTMLInputElement, imageUrl:HTMLInputElement){
      this.afficheralert = true;
      this.collegueService.sauvegarder(new Collegue(pseudo.value, imageUrl.value, 0))
      .subscribe(
        colleg => this.collegues.push(colleg)
      )
      //eviter rechargement page
      return false;
  }

}
