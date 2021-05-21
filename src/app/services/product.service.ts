import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProductModel } from '../models/product.model';

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
      return this.http.get('http://localhost:3000/product')
    }


    /* get single product from server*/
    getsingleproduct(id:any){
      return this.http.get<ProductModel>('http://localhost:3000/products/' + id)
    
    }


    /* get  product with cat*/
    getproduct(id:number){
 
      
    }

}
