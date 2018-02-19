import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { UnCollegueComponentComponent } from './un-collegue-component/un-collegue-component.component';

import { HttpClientModule } from '@angular/common/http';
import { CollegueService } from './shared/service/collegue.service';
import { RouterModule, Routes } from '@angular/router';
import { TableauCollegueComponent } from './tableau-collegue/tableau-collegue.component';
import { CarrouselCollegueComponent } from './carrousel-collegue/carrousel-collegue.component';
import { DetailCollegueComponent } from './detail-collegue/detail-collegue.component';
import { ClassiqueCollegueComponent } from './classique-collegue/classique-collegue.component';
import { ScorePipe } from './shared/pipe/score.pipe';
import { PseudoPipe } from './shared/pipe/pseudo.pipe';

const appRoutes: Routes = [
  { path: 'classique', component: ClassiqueCollegueComponent },
  { path: 'tableau', component: TableauCollegueComponent },
  { path: 'carrousel', component: CarrouselCollegueComponent },
  { path: 'detail/:pseudo', component: DetailCollegueComponent },
  { path: '**', redirectTo: 'classique' }
];



@NgModule({
  declarations: [
    AppComponent,
    UnCollegueComponentComponent,
    TableauCollegueComponent,
    CarrouselCollegueComponent,
    DetailCollegueComponent,
    ClassiqueCollegueComponent,
    ScorePipe,
    PseudoPipe
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CollegueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
