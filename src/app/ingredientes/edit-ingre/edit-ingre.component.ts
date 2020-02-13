import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/services/rest-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-ingre',
  templateUrl: './edit-ingre.component.html',
  styleUrls: ['./edit-ingre.component.scss']
})
export class EditIngreComponent implements OnInit {
  idIngredient = this.actRoute.snapshot.params['id'];
  ingredientData: any = {};
  constructor(public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router) { }

  ngOnInit() {
    this.restApi.getIngredientByID(this.idIngredient).subscribe((data: {}) => {
      this.ingredientData = data;
    })
  }

  editIngredient() {
    if (window.confirm('Esta seguro que desea actualizar?')) {
      this.restApi.updateIngredient(this.idIngredient, this.ingredientData).subscribe(data => {
        this.router.navigate(["ingredients"])
        console.log("metodo success")
        console.log(this.idIngredient)
      },(error:any)=>{
        console.log(this.idIngredient)
        this.router.navigate(["ingredients"])
        console.log("method error")
      })
    }
  }

}
