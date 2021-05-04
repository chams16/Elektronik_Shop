import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { ProductModel, ServeurResponse } from '../../models/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products:ProductModel[]=[]

  constructor(
    private productservice:ProductService,
    private route:Router
    ) { }

  ngOnInit(): void {
    this.productservice.getAllProduct().subscribe(( prods:ServeurResponse )=>{
      this.products = prods.product
    })
  }

  selectproduct(id:number){
    this.route.navigate(['/product' , id])
  }

}
