import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositionsComponent } from './depositions.component';

describe('DepositionsComponent', () => {
  let component: DepositionsComponent;
  let fixture: ComponentFixture<DepositionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepositionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DepositionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
