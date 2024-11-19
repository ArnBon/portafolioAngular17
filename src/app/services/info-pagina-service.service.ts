import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaServiceService {

  info: any = {};
  cargada = false;

   constructor(private http: HttpClient) {
    // console.log('Servicio de infopagina listo');

    //Leer archivo JSON eso se hace a traves del endpoint que necesitas
    this.http.get('assets/data/data-pagina.json') //y este es el endpoint
    .subscribe(resp => {
      this.cargada = true;
      this.info = resp;
      console.log(resp);

    });
   }
}
