import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentresDetailsComponent } from './centres-details.component';

describe('CentresDetailsComponent', () => {
  let component: CentresDetailsComponent;
  let fixture: ComponentFixture<CentresDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentresDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentresDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
