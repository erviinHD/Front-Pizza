import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../services/rest-api.service';

@Component({
  selector: 'app-view-ingredient',
  templateUrl: './view-ingredient.component.html',
  styleUrls: ['./view-ingredient.component.scss']
})
export class ViewIngredientComponent implements OnInit {
  ingredient: any = [];
  constructor(public restApi: RestApiService) { }

  ngOnInit() {
    this.viewIngredients();
  }

  viewIngredients(){
    return this.restApi.getIngredients().subscribe((data: {}) => {
      this.ingredient = data;
    })
  }

  deleteIngredient(id) {
    if (window.confirm('Está seguro que desea eliminar el dato?')) {
      this.restApi.deleteIngredient(id).subscribe(data => {
        this.viewIngredients();
      })
    }
  }

}
