import { Injectable } from '@angular/core';
import { Collegue } from '../domain/collegue';
import { HttpClient } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { UnCollegueComponentComponent } from '../../un-collegue-component/un-collegue-component.component';
import { Router } from '@angular/router';


@Injectable()
export class CollegueService {


  constructor(private http: HttpClient) { }

  listerCollegues(): Promise<Collegue[]> {
    return this.http.get<any[]>('http://localhost:8080/api/collegues').toPromise()
  }

  sauvegarder(newCollegue: Collegue): Promise<Collegue> {
    return this.http.post<Collegue>('http://localhost:8080/api/collegues', newCollegue).toPromise()
  }

  aimerUnCollegue(unCollegue: Collegue): Promise<Collegue> {
    return this.http.patch<Collegue>(`http://localhost:8080/api/collegues/${unCollegue.pseudo}`, { 'action': 'aimer' }).toPromise();
  }

  detesterUnCollegue(unCollegue: Collegue): Promise<Collegue> {
    return this.http.patch<Collegue>(`http://localhost:8080/api/collegues/${unCollegue.pseudo}`, { 'action': 'detester' }).toPromise()
  }

  afficherUnCollegue(pseudo: string): Promise<Collegue> {
    return this.http.get<any>(`http://localhost:8080/api/collegues/` + pseudo).toPromise();
  }

}
