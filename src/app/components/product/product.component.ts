import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductModel, ServeurResponse } from 'src/app/models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  id: any;
  
   productdetail:any=[]
   src:any

  constructor(
    private producrservice: ProductService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.getOne(this.id)
    console.log(this.id);
    this.src = this.productdetail.image
    
  }

  getOne(x:any){
    this.producrservice.getsingleproduct(x).subscribe(
      res=>{
        this.productdetail=res
        console.log(this.productdetail);
       
        
        
        
      }
      
    )
  }

  

}
