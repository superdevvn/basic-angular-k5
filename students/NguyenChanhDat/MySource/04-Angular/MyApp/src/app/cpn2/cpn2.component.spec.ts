import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cpn2Component } from './cpn2.component';

describe('Cpn2Component', () => {
  let component: Cpn2Component;
  let fixture: ComponentFixture<Cpn2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cpn2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cpn2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
