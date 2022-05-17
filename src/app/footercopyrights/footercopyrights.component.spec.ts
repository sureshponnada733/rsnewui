import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootercopyrightsComponent } from './footercopyrights.component';

describe('FootercopyrightsComponent', () => {
  let component: FootercopyrightsComponent;
  let fixture: ComponentFixture<FootercopyrightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootercopyrightsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FootercopyrightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
