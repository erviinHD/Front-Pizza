import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Pizzas } from '../model/pizzas';
import { retry, catchError } from 'rxjs/operators'
import { Ingredientes } from '../model/ingredient';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  [x: string]: any;

  apiURL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getPizzas(): Observable<Pizzas> {
    return this.http.get<Pizzas>(this.apiURL + '/pizzas')
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  deletePizza(id) {
    return this.http.delete<Pizzas>(this.apiURL + '/pizzas/' + id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  createPizza(pizza): Observable<Pizzas> {
    return this.http.post<Pizzas>(this.apiURL + '/pizzas', JSON.stringify(pizza), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  getPizzaByID(id): Observable<Pizzas> {
    return this.http.get<Pizzas>(this.apiURL + '/pizzas/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  updatePizza(id, pizza): Observable<Pizzas> {
    return this.http.put<Pizzas>(this.apiURL + '/pizzas/' + id, JSON.stringify(pizza),
      this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }


///////////// INGREDIENTS ///////////////
  /////////////////////////////////////////////////////////

  getIngredients(): Observable<Ingredientes> {
    return this.http.get<Ingredientes>(this.apiURL + '/ingredients')
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  getIngredientByID(id): Observable<Ingredientes> {
    return this.http.get<Ingredientes>(this.apiURL + '/ingredients/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  createIngredient(ingre): Observable<Ingredientes> {
    return this.http.post<Ingredientes>(this.apiURL + '/ingredients', JSON.stringify(ingre), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  deleteIngredient(id) {
    return this.http.delete<Ingredientes>(this.apiURL + '/ingredients/' + id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }


  updateIngredient(id, ingre): Observable<Ingredientes> {
    return this.http.put<Ingredientes>(this.apiURL + '/ingredients/' + id, JSON.stringify(ingre),
      this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }



}
