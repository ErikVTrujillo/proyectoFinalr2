import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibroActualizarComponent } from './libro-actualizar.component';

describe('LibroActualizarComponent', () => {
  let component: LibroActualizarComponent;
  let fixture: ComponentFixture<LibroActualizarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LibroActualizarComponent]
    });
    fixture = TestBed.createComponent(LibroActualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
