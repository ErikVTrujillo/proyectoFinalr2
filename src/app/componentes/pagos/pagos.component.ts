import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

declare var paypal:any;

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.css']
})
export class PagosComponent implements OnInit {

  @ViewChild('paypal', { static: true })
  paypalElement!: ElementRef;

  producto = {
    descripcion: 'producto en venta',
    precio: 599.99,
    img: 'imagen de tu producto'
  }

  title = 'angular-paypal-payment';

  ngOnInit(): void {
    paypal
      .Buttons({
        createOrder: (data:any, actions:any) => {
          return actions.order.create({
            purchase_units: [
              {
                description: this.producto.descripcion,
                amount: {
                  currency_code: 'MXN',
                  value: this.producto.precio
                }
              }
            ]
          })
        },
        onApprove: async (data: any, actions: any) => {
          const order = await actions.order.capture();
          console.log(order);
        },
        onError: (err: any) => {
          console.log(err);
        }
      })
      .render(this.paypalElement.nativeElement);
  }
}