import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Product } from 'src/app/model/product';
import { Vendor } from 'src/app/model/vendor';
import { ProductService } from 'src/app/service/product.service';
import { VendorService } from 'src/app/service/vendor.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  title: string ="Product Detail";
  product: Product = new Product();
  productId: number=0;
  vendor: Vendor[]=[];
  message?: string = undefined;

  constructor(private productSvc: ProductService, private router: Router,
              private route:ActivatedRoute, private vendorSvc: VendorService) { }

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (params)=>{
        this.productId= params['id'];
      this.productSvc.getProductById(this.productId).subscribe({
        next: (params)=>{
          this.product = params;
        },
        error:(err) =>{
          console.log("Error getting product by id:", err);
        },
        complete: () => {},
      });
    },
    error:(err)=>{
      console.log('Error getting id from url:', err);
    },
    complete: ()=>{},

});
this.vendorSvc.getAllVendor().subscribe({
  next: (resp) => {
    this.vendor = resp;
  },
  error: (err) => {
    console.log('Vendor details - error getting details.');
  },
  complete: () => {},
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
compVendor(a: Vendor, b: Vendor): boolean {
  return a && b && a.id === b.id;
}

}


 

  


