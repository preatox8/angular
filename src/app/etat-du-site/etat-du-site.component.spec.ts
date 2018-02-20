import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtatDuSiteComponent } from './etat-du-site.component';

describe('EtatDuSiteComponent', () => {
  let component: EtatDuSiteComponent;
  let fixture: ComponentFixture<EtatDuSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtatDuSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtatDuSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
