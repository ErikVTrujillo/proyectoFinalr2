import { Injectable } from '@angular/core';
import { CarritoItem } from 'src/models/carritoItem';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  existsCart(): boolean {
    return localStorage.getItem('cart') !== null;
  }

  setCart(cart: CarritoItem[]): void {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  getCart(): CarritoItem[] {
    const cartData = localStorage.getItem('cart');
    if (cartData) {
      try {
        return JSON.parse(cartData) as CarritoItem[];
      } catch (error) {
        console.error('Error al parsear el carrito:', error);
        return [];
      }
    } else {
      return [];
    }
  }

  clear(): void {
    localStorage.removeItem('cart');
  }
}
