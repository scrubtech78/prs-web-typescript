import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';
import { Vendor } from 'src/app/model/vendor';
import { VendorService } from 'src/app/service/vendor.service';
@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  title: string = "ProductCreateComponent";
  product: Product = new Product();
  vendor: Vendor = new Vendor();
  message?: string = undefined;

  constructor(private productSvc: ProductService, private router: Router, private vendorSvc: VendorService) { }

  ngOnInit(): void {
  }
  save(): void {
    console.log("save product", this.product);
    this.productSvc.addProduct(this.product).subscribe({
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



 





