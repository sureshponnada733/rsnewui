import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarepartnerComponent } from './carepartner.component';

describe('CarepartnerComponent', () => {
  let component: CarepartnerComponent;
  let fixture: ComponentFixture<CarepartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarepartnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarepartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
