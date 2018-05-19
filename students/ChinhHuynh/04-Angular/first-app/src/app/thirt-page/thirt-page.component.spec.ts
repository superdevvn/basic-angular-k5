import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirtPageComponent } from './thirt-page.component';

describe('ThirtPageComponent', () => {
  let component: ThirtPageComponent;
  let fixture: ComponentFixture<ThirtPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirtPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirtPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
