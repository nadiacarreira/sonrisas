import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHeroesComponent } from './edit-heroes.component';

describe('EditHeroesComponent', () => {
  let component: EditHeroesComponent;
  let fixture: ComponentFixture<EditHeroesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditHeroesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
