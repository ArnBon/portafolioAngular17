import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent implements OnInit{

  constructor(private route: ActivatedRoute){}


  ngOnInit(): void {
    /*se vana a pasar los parametros
    de la url es decir para saber que id es
    es decir el parametro es el id */
    this.route.params
    .subscribe(parametros =>{
      console.log(parametros)
    })
  }

}
