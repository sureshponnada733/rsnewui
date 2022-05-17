import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicepartnerComponent } from './servicepartner.component';

describe('ServicepartnerComponent', () => {
  let component: ServicepartnerComponent;
  let fixture: ComponentFixture<ServicepartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicepartnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicepartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
