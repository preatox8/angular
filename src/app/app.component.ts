import { Component } from '@angular/core';
import { Collegue } from './shared/domain/collegue';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 
  collegues:Collegue[];
  afficheralert:boolean = false;
 
  ngOnInit(){
      this.collegues = [];
      this.collegues.push(new Collegue('Zaccharie', '../assets/photo.png', 100));
      this.collegues.push(new Collegue('Remi', '../assets/photo.png', 75));
      this.collegues.push(new Collegue('Lucas', '../assets/photo.png', 50));
      this.collegues.push(new Collegue('Vincent', '../assets/photo.png', 25));
      this.collegues.push(new Collegue('mystere', '../assets/photo.png', 0));
  }

  add(pseudo:HTMLInputElement, imageUrl:HTMLInputElement){
      this.afficheralert = true;
      this.collegues.push(new Collegue(pseudo.value, imageUrl.value, 100));
      return false;
  }

}
