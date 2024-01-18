import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibroAltaComponent } from './libro-alta.component';

describe('LibroAltaComponent', () => {
  let component: LibroAltaComponent;
  let fixture: ComponentFixture<LibroAltaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LibroAltaComponent]
    });
    fixture = TestBed.createComponent(LibroAltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
