import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnCollegueComponentComponent } from './un-collegue-component.component';

describe('UnCollegueComponentComponent', () => {
  let component: UnCollegueComponentComponent;
  let fixture: ComponentFixture<UnCollegueComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnCollegueComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnCollegueComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
