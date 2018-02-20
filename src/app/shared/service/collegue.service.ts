import { Injectable } from '@angular/core';
import { Collegue } from '../domain/collegue';
import { Avis } from '../domain/avis';
import { HttpClient } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { UnCollegueComponentComponent } from '../../un-collegue-component/un-collegue-component.component';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class CollegueService {

  private collegueSub:Subject<any> = new Subject();
  private collegueAvis:Subject<Avis> = new Subject();
  private networkstatus:Subject<any> = new Subject();

  constructor(private http: HttpClient) { }

  getObserversubject(): Observable<any>{
    return this.collegueSub.asObservable();
  } 

  getcollegueAvis(): Observable<any>{
    return this.collegueAvis.asObservable();
  } 

  getnetworkStatus(): Observable<any>{
    return this.networkstatus.asObservable();
  } 

  listerCollegues(): Observable<Collegue[]> {
    return this.http.get<any[]>('http://localhost:8080/api/collegues');
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

}
