import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EconomicaComponent } from './economica.component';

describe('EconomicaComponent', () => {
  let component: EconomicaComponent;
  let fixture: ComponentFixture<EconomicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EconomicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EconomicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
