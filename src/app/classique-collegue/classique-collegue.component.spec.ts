import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassiqueCollegueComponent } from './classique-collegue.component';

describe('ClassiqueCollegueComponent', () => {
  let component: ClassiqueCollegueComponent;
  let fixture: ComponentFixture<ClassiqueCollegueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassiqueCollegueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassiqueCollegueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
