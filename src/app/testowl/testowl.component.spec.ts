import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestowlComponent } from './testowl.component';

describe('TestowlComponent', () => {
  let component: TestowlComponent;
  let fixture: ComponentFixture<TestowlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestowlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestowlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
