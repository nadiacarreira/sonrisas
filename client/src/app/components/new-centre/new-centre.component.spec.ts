import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCentreComponent } from './new-centre.component';

describe('NewCentreComponent', () => {
  let component: NewCentreComponent;
  let fixture: ComponentFixture<NewCentreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCentreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCentreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
