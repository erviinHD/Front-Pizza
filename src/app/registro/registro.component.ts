import { Component, OnInit, Input } from '@angular/core';
import { RestApiService } from '../services/rest-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  @Input() pizzaDetalles = { name: '', origin: '' }

  constructor(
    public restApi: RestApiService,
    public router: Router
  ) { }

  ngOnInit() {
  }

  addPizza() {
    this.restApi.createPizza(this.pizzaDetalles).subscribe((data: {}) => {
    this.router.navigate(['consulta']) 
    },(error:any)=>{
      this.router.navigate(['consulta'])
      console.log("method error")
    }) }

}
