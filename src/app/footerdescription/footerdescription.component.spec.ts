import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterdescriptionComponent } from './footerdescription.component';

describe('FooterdescriptionComponent', () => {
  let component: FooterdescriptionComponent;
  let fixture: ComponentFixture<FooterdescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterdescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterdescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
