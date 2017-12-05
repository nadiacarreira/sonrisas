import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoButtonLinkComponent } from './two-button-link.component';

describe('TwoButtonLinkComponent', () => {
  let component: TwoButtonLinkComponent;
  let fixture: ComponentFixture<TwoButtonLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoButtonLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoButtonLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
