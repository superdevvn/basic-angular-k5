import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cpn1Component } from './cpn1.component';

describe('Cpn1Component', () => {
  let component: Cpn1Component;
  let fixture: ComponentFixture<Cpn1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cpn1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cpn1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
