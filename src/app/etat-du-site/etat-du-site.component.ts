import { Component, OnInit } from '@angular/core';
import { CollegueService } from '../shared/service/collegue.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/Rx';
import { isObject } from 'util';

@Component({
  selector: 'app-etat-du-site',
  templateUrl: './etat-du-site.component.html',
  styleUrls: ['./etat-du-site.component.css']
})
export class EtatDuSiteComponent implements OnInit {

  isonline: boolean = true;

  //façon observable
  constructor(private collegueService: CollegueService) { }


  ngOnInit() {
    this.collegueService.getnetworkstatus()
      .subscribe(ob => {
        this.isonline = ob;
      }
      )
  }

}
