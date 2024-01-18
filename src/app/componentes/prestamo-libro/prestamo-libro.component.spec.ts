import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestamoLibroComponent } from './prestamo-libro.component';

describe('PrestamoLibroComponent', () => {
  let component: PrestamoLibroComponent;
  let fixture: ComponentFixture<PrestamoLibroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrestamoLibroComponent]
    });
    fixture = TestBed.createComponent(PrestamoLibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
