import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrouselCollegueComponent } from './carrousel-collegue.component';

describe('CarrouselCollegueComponent', () => {
  let component: CarrouselCollegueComponent;
  let fixture: ComponentFixture<CarrouselCollegueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrouselCollegueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrouselCollegueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
