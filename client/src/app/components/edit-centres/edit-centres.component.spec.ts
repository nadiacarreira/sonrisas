import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCentresComponent } from './edit-centres.component';

describe('EditCentresComponent', () => {
  let component: EditCentresComponent;
  let fixture: ComponentFixture<EditCentresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCentresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCentresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
