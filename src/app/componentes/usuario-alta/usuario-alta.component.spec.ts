import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioAltaComponent } from './usuario-alta.component';

describe('UsuarioAltaComponent', () => {
  let component: UsuarioAltaComponent;
  let fixture: ComponentFixture<UsuarioAltaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsuarioAltaComponent]
    });
    fixture = TestBed.createComponent(UsuarioAltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
