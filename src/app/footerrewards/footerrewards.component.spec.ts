import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterrewardsComponent } from './footerrewards.component';

describe('FooterrewardsComponent', () => {
  let component: FooterrewardsComponent;
  let fixture: ComponentFixture<FooterrewardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterrewardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterrewardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
