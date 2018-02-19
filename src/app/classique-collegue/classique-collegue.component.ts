import { Component, OnInit } from '@angular/core';
import { Collegue } from '../shared/domain/collegue';
import { CollegueService } from '../shared/service/collegue.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-classique-collegue',
  templateUrl: './classique-collegue.component.html',
  styleUrls: ['./classique-collegue.component.css']
})
export class ClassiqueCollegueComponent implements OnInit {
  size:number = 10;
  collegues:Collegue[];

  constructor(private collegueService:CollegueService) { }

  ngOnInit() {
    this.collegueService.listerCollegues().then(tabCollegues => {
      this.collegues = tabCollegues
    });
  }

  onChangeSize(filtreNombre:HTMLInputElement) {
    this.size = Number.parseInt(filtreNombre.value);
  }

}
