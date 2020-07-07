import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AHComponent } from './ah.component';

describe('AHComponent', () => {
  let component: AHComponent;
  let fixture: ComponentFixture<AHComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AHComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
