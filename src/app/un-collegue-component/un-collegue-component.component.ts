import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Collegue } from '../shared/domain/collegue';

import { CollegueService } from '../shared/service/collegue.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-un-collegue-component',
  templateUrl: './un-collegue-component.component.html',
  styleUrls: ['./un-collegue-component.component.css'],
})
export class UnCollegueComponentComponent implements OnInit {

  @Input() collegue: Collegue;
  @Input() hauteurImage: number;
  @Output() colleguesort: Collegue;



  constructor(private collegueService: CollegueService) { }

  ngOnInit() {
    
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

  tailler(img: HTMLImageElement) {
    console.log("tailler", img);
    this.hauteurImage = img.width;
  }


}
