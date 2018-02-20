import { Component, OnInit } from '@angular/core';
import { CollegueService } from '../shared/service/collegue.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/Rx';

@Component({
  selector: 'app-etat-du-site',
  templateUrl: './etat-du-site.component.html',
  styleUrls: ['./etat-du-site.component.css']
})
export class EtatDuSiteComponent implements OnInit {

  online: Observable<boolean>;

  //façon observable
  constructor(private collegueService: CollegueService) {
    this.online = Observable.merge(
      Observable.of(navigator.onLine),
      Observable.fromEvent(window, 'online').map(() => true),
      Observable.fromEvent(window, 'offline').map(() => false));
  }


  ngOnInit() {

    //façon jquery
    /* setInterval(function () {
       var status = document.getElementById('etatsite');
           status.className = navigator.onLine ? 'badge badge-primary float-right' : 'badge badge-danger float-right';
           status.innerHTML = navigator.onLine ? 'En ligne' : 'Hors ligne';
       }, 5000);*/

  }

}
