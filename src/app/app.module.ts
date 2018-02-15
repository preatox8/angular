import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { UnCollegueComponentComponent } from './un-collegue-component/un-collegue-component.component';

import { HttpClientModule } from '@angular/common/http';
import { CollegueService } from './shared/service/collegue.service';


@NgModule({
  declarations: [
    AppComponent,
    UnCollegueComponentComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule
  ],
  providers: [CollegueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
