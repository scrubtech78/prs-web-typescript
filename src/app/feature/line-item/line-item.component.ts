import { Component, OnInit } from '@angular/core';
import { Lineitem } from 'src/app/model/lineitem';
import { LineItemService } from 'src/app/service/lineitem.service';
import { Request } from 'src/app/model/request';
import { SystemService } from 'src/app/service/system.service';
import { RequestService } from 'src/app/service/request.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from 'src/app/model/vendor';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-line-item',
  templateUrl: './line-item.component.html',
  styleUrls: ['./line-item.component.css']
})
export class LineItemComponent implements OnInit {
  title: string = "Line-Items";
  lineitem: Lineitem = new Lineitem();
  request: Request = new Request();
  vendor:Vendor = new Vendor();
  product: Product = new Product();

  message?: string = undefined;

  constructor(private lineitemSvc:  LineItemService, private systemSvc: SystemService, 
    private requestSvc: RequestService, private router: Router, private route: ActivatedRoute ) { }

  ngOnInit(): void {
    
    
    
    this.lineitemSvc.getAllLineitems();
    this.route.params.subscribe({
      next: (params)=>{
        this.request.id= params['id'];
      this.requestSvc.getRequestById(this.request.id).subscribe({
        next: (params)=>{
          this.request = params;
        },
        error:(err) =>{
          console.log("Error getting request by id:", err);
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
  reviewRequest(){
    
  }
  }


