import { Injectable } from '@angular/core';
import { Collegue } from '../domain/collegue';
import { Avis } from '../domain/avis';
import { HttpClient } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { UnCollegueComponentComponent } from '../../un-collegue-component/un-collegue-component.component';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { IntervalObservable } from "rxjs/observable/IntervalObservable";
import { Aviscollegue } from '../domain/aviscollegue';



@Injectable()
export class CollegueService {

  private collegueSub: Subject<any> = new Subject();
  private aviscommentaire: Subject<Aviscollegue> = new Subject();
  private collegueAvis: Subject<Avis> = new Subject();
  private online: Observable<boolean> = new Observable();

  constructor(private http: HttpClient) {
    this.online = Observable.merge(
      Observable.of(navigator.onLine),
      Observable.fromEvent(window, 'online').map(() => true),
      Observable.fromEvent(window, 'offline').map(() => false));
  }

  getObserversubject(): Observable<any> {
    return this.collegueSub.asObservable();
  }

  getcollegueAvis(): Observable<any> {
    return this.collegueAvis.asObservable();
  }

  getnetworkstatus(): Observable<boolean> {
    return this.online;
  }

  getaviscollegue(): Observable<Aviscollegue> {
    return this.aviscommentaire.asObservable();
  }

  listerCollegues(): Observable<Collegue[]> {
    return this.http.get<any[]>('http://localhost:8080/api/collegues');
  }

  sauvegardercommentaire(commentaire :Aviscollegue): Observable<Aviscollegue>{
    console.log(commentaire);
    this.aviscommentaire.next(commentaire);
    return this.http.post<Aviscollegue>('http://localhost:8080/api/avis', commentaire)
  }

  sauvegarder(newCollegue: Collegue): Observable<Collegue> {
    this.collegueSub.next(newCollegue);
    return this.http.post<Collegue>('http://localhost:8080/api/collegues', newCollegue);
  }

  aimerUnCollegue(unCollegue: Collegue): Observable<Collegue> {
    this.collegueAvis.next(new Avis(true, unCollegue.pseudo));
    return this.http.patch<Collegue>(`http://localhost:8080/api/collegues/${unCollegue.pseudo}`, { 'action': 'aimer' });
  }

  detesterUnCollegue(unCollegue: Collegue): Observable<Collegue> {
    this.collegueAvis.next(new Avis(false, unCollegue.pseudo));
    return this.http.patch<Collegue>(`http://localhost:8080/api/collegues/${unCollegue.pseudo}`, { 'action': 'detester' });
  }

  afficherUnCollegue(pseudo: string): Observable<Collegue> {
    return this.http.get<any>(`http://localhost:8080/api/collegues/` + pseudo);
  }

  afficherAvisUnCollegue(pseudo: string): Observable<Aviscollegue[]> {
    return this.http.get<any>(`http://localhost:8080/api/avis/` + pseudo);
  }

}