import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibroEliminarComponent } from './libro-eliminar.component';

describe('LibroEliminarComponent', () => {
  let component: LibroEliminarComponent;
  let fixture: ComponentFixture<LibroEliminarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LibroEliminarComponent]
    });
    fixture = TestBed.createComponent(LibroEliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
