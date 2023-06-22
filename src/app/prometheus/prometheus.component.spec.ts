import { ComponentFixture, TestBed } from '@angular/core/testing';

import { prometheusComponent } from './prometheus.component';

describe('prometheusComponent', () => {
  let component: prometheusComponent;
  let fixture: ComponentFixture<prometheusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ prometheusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(prometheusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
