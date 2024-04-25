import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  title: string = "ProductCreateComponent";
  product: Product = new Product();
  message?: string = undefined;

  constructor(private productSvc: ProductService, private router: Router) { }

  ngOnInit(): void {
  }
  save(): void {
    console.log("save product", this.product);
    this.productSvc.createProduct(this.product).subscribe({
      next: (resp) => {
        this.product = resp;
        this.router.navigateByUrl("/product/list");
      },
      error: (err) => {
        console.log("Error creating product:", err);
        this.message = "Error creating product"
      },
      complete: () => {}


    });
  }




}



 





