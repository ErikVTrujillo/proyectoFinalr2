import { Component, OnInit  } from '@angular/core';
import { icon, Map, marker, tileLayer, routing, latLng } from 'leaflet';
import { PlacesService } from 'src/app/services/places.service';
import 'leaflet-routing-machine';


@Component({
  selector: 'app-geolocalizacion',
  templateUrl: './geolocalizacion.component.html',
  styleUrls: ['./geolocalizacion.component.css']
})
export class GeolocalizacionComponent implements OnInit{

  geo: any;
  map: any;

  constructor(private placeSvc: PlacesService) {}
    ngOnInit(){
      setTimeout(() => {
        this.geo = this.placeSvc.useLocation;
      },2000);
   }

   ngAfterViewInit(){
    setTimeout(() => {
      this.map = new Map('map').setView(this.geo, 13);

      tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(this.map);
    },2000);
   }

   ubicar(){
    setTimeout(() => {
      marker(this.geo).addTo(this.map).bindPopup("<strong>Esta es tu ubicación</strong>").openPopup();
    }, 2000);
    

    routing.control({
      waypoints: [
        latLng(this.geo),
        latLng([21.167296648097125, -100.93023370995411])          
      ]
    }).addTo(this.map);
   }

   recargar(){
    location.reload();
   }
}
