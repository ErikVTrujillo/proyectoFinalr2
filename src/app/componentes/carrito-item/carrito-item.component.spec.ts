import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoItemComponent } from './carrito-item.component';

describe('CarritoItemComponent', () => {
  let component: CarritoItemComponent;
  let fixture: ComponentFixture<CarritoItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarritoItemComponent]
    });
    fixture = TestBed.createComponent(CarritoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
