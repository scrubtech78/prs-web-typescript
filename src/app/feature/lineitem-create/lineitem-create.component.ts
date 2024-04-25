import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Lineitem } from 'src/app/model/lineitem';
import { LineItemService } from 'src/app/service/lineitem.service';
import { SystemService } from 'src/app/service/system.service';
import { Request } from 'src/app/model/request';
import { RequestService } from 'src/app/service/request.service';
import { Vendor } from 'src/app/model/vendor';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';
@Component({
  selector: 'app-lineitem-create',
  templateUrl: './lineitem-create.component.html',
  styleUrls: ['./lineitem-create.component.css']
})
export class LineitemCreateComponent implements OnInit {

  title: string = "New Line Item";
  lineitem: Lineitem = new Lineitem();
  products: Product[]= [];
  vendor: Vendor =new Vendor();
  request: Request = new Request();
 
  message?: string = undefined;

  constructor(private lineitemSvc: LineItemService,private requestSvc: RequestService, 
    private systemSvc: SystemService, private router: Router,
    private route:ActivatedRoute, private prodctSvc: ProductService) { }

  ngOnInit(): void { 
    
    this.prodctSvc.getAllProduct().subscribe({
      next:(resp) =>{
        this.products=resp;
      },
      error:(err) =>{
        console.log("Error getting products", err);
        this.message="Error getting products"
      },
      complete:() =>{}
    });
  
    this.route.params.subscribe ({
       next: (params) =>{
         this.request.id=params["requestId"];
         this.requestSvc.getRequestById(this.request.id).subscribe({
            next: (params) =>{
             this.request=params;
              this.lineitem.request = this.request;
              console.log("LI Create: LI from init: ", this.lineitem);
           },
            complete:()=>{},
          });
      },
     });
    //get requestId from route 
    //get request for requestId
    //set request in lineitem
  }
   
    
  
  save(): void {
    console.log("LI Create: LI on save: ", this.lineitem);
    this.lineitemSvc.addLineItem(this.lineitem).subscribe({
      next: (resp) => {
        this.lineitem = resp;
        this.router.navigateByUrl("/requestlines/"+this.lineitem.request.id);
      },
      error: (err) => {
        console.log("Error creating line item:", err.message);
        this.message = "Error adding line item "
      },
      complete: () => {}


    });
  }

}
