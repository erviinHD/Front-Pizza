import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../services/rest-api.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})
export class ConsultaComponent implements OnInit {
  pizzas: any = [];

  constructor(public restApi: RestApiService) { }

  ngOnInit() {
    this.consultarPizzas()
  }

  consultarPizzas() {
    return this.restApi.getPizzas().subscribe((data: {}) => {
      this.pizzas = data;
    })
  }

  eliminarPizza(id) {
    if (window.confirm('Está seguro que desea eliminar el dato?')) {
      this.restApi.deletePizza(id).subscribe(data => {
        this.consultarPizzas()
      })
    }
  }

}
