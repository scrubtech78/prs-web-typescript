import { Component, OnInit } from '@angular/core';

import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  title: string = "Product-List";
  
  product?: Product[] = undefined;

constructor(private productSvc: ProductService) { }

 

  ngOnInit(): void {
    this.productSvc.getAllProduct().subscribe({
      next:(resp) =>{
        this.product=resp;
      },
      error: (err) => {
        console.log(err);
      },
      complete: ()=>{}
    });
  }

}


  


