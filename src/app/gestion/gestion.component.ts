import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../services/rest-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss']
})
export class GestionComponent implements OnInit {
  idPizza = this.actRoute.snapshot.params['id'];
  pizzaData: any = {};
  constructor(
    public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit() {
    this.restApi.getPizzaByID(this.idPizza).subscribe((data: {}) => {
      this.pizzaData = data;
    })
  }

  editPizza() {
    if (window.confirm('Esta seguro que desea actualizar?')) {
      this.restApi.updatePizza(this.idPizza, this.pizzaData).subscribe(data => {
        this.router.navigate(["consulta"])
        console.log("metodo success")
        console.log(this.pizzaData)
      },(error:any)=>{
        console.log(this.pizzaData)
        this.router.navigate(["consulta"])
        console.log("method error")
      })
    }
  }

}
