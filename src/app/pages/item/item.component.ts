import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoDescripcion } from '../../interfaces/producto-descripcion.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent implements OnInit{

  // producto: ProductoDescripcion; da error
  //producto: ProductoDescripcion | undefined; //lo pones asi O
 producto!: ProductoDescripcion; //lo pongo asi
 id!: string;







  constructor(private route: ActivatedRoute,
              public _productoService: ProductosService
  ){}


  // ngOnInit(): void {
  //   /*se van a a pasar los parametros de la url es decir para saber que id es; es decir el parametro es el id */
  //   this.route.params
  //   .subscribe(parametros => {
  //     // console.log(parametros)
  //     this._productoService.getProducto(parametros['id'])
  //     .subscribe( ( producto: ProductoDescripcion) =>  {
  //       console.log(producto);
  //     });
  //   });
  // }


  ngOnInit(): void {
    //   /*se van a a pasar los parametros de la url es decir para saber que id es; es decir el parametro es el id */
  this.route.params.subscribe(parametros => {
    const id = parametros['id'];

    // Verificar si id es válido
    if (id) {
      this._productoService.getProducto(id)
      .subscribe((producto: ProductoDescripcion) => {
        this.id = parametros['id'];
        this.producto = producto;
        console.log(producto);
        },
        error => {
          console.error('Error al obtener el producto:', error);
        }
      );
    } else {
      console.error('ID no válido');
    }
  });
}

}
