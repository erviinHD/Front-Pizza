import { Component, OnInit, Input } from '@angular/core';
import { RestApiService } from 'src/app/services/rest-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-ingre',
  templateUrl: './new-ingre.component.html',
  styleUrls: ['./new-ingre.component.scss']
})
export class NewIngreComponent implements OnInit {
  @Input() ingredienteDetalle = { id: 0, name: '', calories: '' }
  constructor(
    public restApi: RestApiService,
    public router: Router
  ) { }

  ngOnInit() {
  }

  addIngredients() {
    this.restApi.createIngredient(this.ingredienteDetalle).subscribe((data: {}) => {
    this.router.navigate(['ingredients']) 
    },(error:any)=>{
      this.router.navigate(['ingredients'])
      console.log("method error")
    }) }

}
