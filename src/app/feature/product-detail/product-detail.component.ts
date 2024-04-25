import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  title: string ="Product Detail";
  product: Product = new Product();
  productId: number =0;
  message?: string = undefined;

  constructor(private productSvc: ProductService, private router: Router,
              private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (params)=>{
        this.productId= params['id'];
      this.productSvc.getProductById(this.productId).subscribe({
        next: (params)=>{
          this.product = params;
        },
        error:(err) =>{
          console.log("Error getting user by id:", err);
        },
        complete: () => {},
      });
    },
    error:(err)=>{
      console.log('Error getting id from url:', err);
    },
    complete: ()=>{},

});
  }
  delete() {
    this.productSvc.deleteProduct(this.productId).subscribe({
      next: (resp) => {
        if (resp == false) {
          console.log('ProductDetailComponent - error deleting product.');
          this.message = 'ProductDetailComponent - error deleting product.';
        } else {
          this.router.navigateByUrl('product/list');
        }
      },
      error: (err) => {
        console.log(
          'ProductDetailComponent - Error deleting product: ' + err.message
        );
        this.message =
          'ProductDetailComponent - error deleting product: ' + err.message;
      },
      complete: () => {},
    });

}
}


 

  


