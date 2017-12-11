import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SweetsAlertComponent } from './sweets-alert.component';

describe('SweetsAlertComponent', () => {
  let component: SweetsAlertComponent;
  let fixture: ComponentFixture<SweetsAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SweetsAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SweetsAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
