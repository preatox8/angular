import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AviscollegueComponent } from './aviscollegue.component';

describe('AviscollegueComponent', () => {
  let component: AviscollegueComponent;
  let fixture: ComponentFixture<AviscollegueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AviscollegueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AviscollegueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
