import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Lineitem } from 'src/app/model/lineitem';
import { LineItemService } from 'src/app/service/lineitem.service';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-lineitem-edit',
  templateUrl: './lineitem-edit.component.html',
  styleUrls: ['./lineitem-edit.component.css']
})
export class LineitemEditComponent implements OnInit {
  title: string= "Lineitem-Edit";
  lineitem: Lineitem = new Lineitem();
  product: Product = new Product();
 
  message?: string = undefined;


  constructor(private route: ActivatedRoute, private router: Router, private lineitemSvc: LineItemService) { }

  ngOnInit(): void {
    this.route.params.subscribe({
      next: parms =>{
        this.lineitem.id = parms["id"];
        this.lineitemSvc.updateLineItem(this.lineitem).subscribe({
          next: (parms) =>{
          this.lineitem = parms;
          }
        })
      }
     
    })
  }
  save(): void{
    //check for existance before save?
    console.log("save lineitem:", this.lineitem);
    this.lineitemSvc.updateLineItem(this.lineitem).subscribe({
     next: (resp) =>{
      this.lineitem = resp;
      this.router.navigateByUrl("/requestlines/{{request.id}}");
     },
     error:(err)=>{
      console.log("Error creating request:", err);
      this.message = "Error creating request"
     },
     complete:() =>{}
       
     
    });




}
  }


