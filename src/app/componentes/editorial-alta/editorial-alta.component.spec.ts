import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorialAltaComponent } from './editorial-alta.component';

describe('EditorialAltaComponent', () => {
  let component: EditorialAltaComponent;
  let fixture: ComponentFixture<EditorialAltaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditorialAltaComponent]
    });
    fixture = TestBed.createComponent(EditorialAltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
