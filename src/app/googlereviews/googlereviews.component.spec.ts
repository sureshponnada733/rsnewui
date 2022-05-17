import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GooglereviewsComponent } from './googlereviews.component';

describe('GooglereviewsComponent', () => {
  let component: GooglereviewsComponent;
  let fixture: ComponentFixture<GooglereviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GooglereviewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GooglereviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
