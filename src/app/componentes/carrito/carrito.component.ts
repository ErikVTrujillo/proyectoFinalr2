import { Component, OnInit } from '@angular/core';
import { ICreateOrderRequest, IPayPalConfig } from 'ngx-paypal';
import { CarritoItem } from 'src/models/carritoItem';
import { TipoLibro } from 'src/models/tipoLibro';
import { MensagesService } from 'src/app/services/mensages.service';
import { StorageService } from 'src/app/services/storage.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit{

  cartItems: CarritoItem[] = [];
  total = 0;
  pagoRealizado: boolean = false;
  pagoPendiente: boolean = false; // Asegúrate de definir este booleano según tu lógica de pago

  public payPalConfig?: IPayPalConfig;

  constructor(
    private mensagesService: MensagesService,
    private storageService: StorageService,
    private spinner: NgxSpinnerService,
  ) { }

  ngOnInit(): void {
    this.initConfig();
    if (this.storageService.existsCart()) {
      this.cartItems = this.storageService.getCart();
    }
    this.getItem();
    this.total = this.getTotal();
  }

  private initConfig(): void {
    this.payPalConfig = {
      currency: 'MX', // Cambiar a la moneda correcta, por ejemplo, 'MXN'
      clientId: 'Aelqqb3sxe-PIQHc4JklnKQS0k76xFl8QNyzx3c3jM_74CmXCDP_6DwKG_Yw2YXCsZP5JUkyey8gDYhF', // Coloca tu ID de cliente de PayPal aquí
      createOrderOnClient: (data) => <ICreateOrderRequest>{
        intent: 'CAPTURE',
        purchase_units: [{
          amount: {
            currency_code: 'MXN', // Cambiar a la moneda correcta
            value: this.getTotal().toString(), // Usar el total del carrito
            breakdown: {
              item_total: {
                currency_code: 'MXN',
                value: this.getTotal().toString()
              }
            }
          },
          items: this.getItemsList()
        }]
      },
      advanced: {
        commit: 'true'
      },
      style: {
        label: 'paypal',
        layout: 'vertical'
      },
      onApprove: (data, actions) => {
        console.log('onApprove - transaction was approved, but not authorized', data, actions);
        actions.order.get().then((details: any) => {
          console.log('onApprove - you can get full order details inside onApprove: ', details);
          // Aquí puedes manejar la lógica después de la aprobación del pago
        });
      },
      onClientAuthorization: (data) => {
        console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', JSON.stringify(data));
        this.pagoRealizado = true; // Cambia el estado del pago a "realizado"
        // Aquí puedes informar al servidor sobre la transacción completada
        this.vaciarCarrito();

      },
      onCancel: (data, actions) => {
        console.log('OnCancel', data, actions);
        // Manejo de la cancelación del pago
      },
      onError: err => {
        console.log('OnError', err);
        // Manejo de errores
      },
      onClick: (data, actions) => {
        console.log('onClick', data, actions);
        // Manejo del evento de clic antes del pago
      }
    };
  }

  getItem(): void { //GUARDAR ITEM EN EL CARRITO
    this.mensagesService.getMessage().subscribe((tipoLibro: TipoLibro) => {
      let exists = false;
      this.cartItems.forEach(item => {
        if (item.id_libro === tipoLibro.id_libro) {
          exists = true;
          item.cantidad++;
        }
      });
      if (!exists) {
        const carritoItem = new CarritoItem(tipoLibro);
        this.cartItems.push(carritoItem);
      }
      this.total = this.getTotal();
      this.storageService.setCart(this.cartItems);
    });
  }

  getItemsList(): any[]{
    const items: any[] = [];
    let item = {};
    this.cartItems.forEach((it: CarritoItem) => {
      item = {
        name: it.titulo,
        quantity: it.cantidad,
        unit_amount: { value: it.precio, currency_code: 'MXN'}
      };
      items.push(item);
    });
    return items;
  }

  getTotal(): number {
    let total = 0;
    this.cartItems.forEach(item => {
      const precioT = Number(item.precio);
      total += item.cantidad * precioT;
    });
    return +total.toFixed(2);
  }

  vaciarCarrito(): void {
    this.cartItems = [];
    this.total = 0;
    this.storageService.clear();
  }

  deleteItem(i: number): void {
    if (this.cartItems[i].cantidad > 1) {
      this.cartItems[i].cantidad--;
    } else {
      this.cartItems.splice(i, 1)
    }
    this.total = this.getTotal();
    this.storageService.setCart(this.cartItems);
  }
}
