import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private serveur_url=environment.serveur_url

  constructor(
    private http:HttpClient
  ) { }

    /*Methode to fetch and get all product from the backend*/ 
    getAllProduct(){
      return this.http.get(this.serveur_url + '/product')
    }



}
