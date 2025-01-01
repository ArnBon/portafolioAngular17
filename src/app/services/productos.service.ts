import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductoInterface } from '../interfaces/producto.interface';
import { Observable } from 'rxjs';
import { ProductoDescripcion } from '../interfaces/producto-descripcion.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: ProductoInterface[] = [];

  constructor(private http: HttpClient) {
    this.cargarProductos();
   }

   private cargarProductos(){

     this.http.get<ProductoInterface[]>('https://angular-html-de05f-default-rtdb.firebaseio.com/productos_idx.json')//y este es el endpoint
    .subscribe( (resp ) => {
      console.log('Respuesta: ', resp);
      this.productos = resp;
      this.cargando = false;
      // setTimeout( () => {
      //   this.cargando = false;
      // }, 2000);

    });

   }

   getProducto(id: string): Observable<ProductoDescripcion> {
    return this.http.get<ProductoDescripcion>(`https://angular-html-de05f-default-rtdb.firebaseio.com/productos/${id}.json`);
}





}
