import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Request } from 'src/app/model/request';
import { Lineitem } from 'src/app/model/lineitem';
import { LineItemService } from 'src/app/service/lineitem.service';
import { RequestService } from 'src/app/service/request.service';
import { SystemService } from 'src/app/service/system.service';
import { User } from 'src/app/model/user';
import { Vendor } from 'src/app/model/vendor';
import { VendorService } from 'src/app/service/vendor.service';
@Component({
  selector: 'app-request-lines',
  templateUrl: './request-lines.component.html',
  styleUrls: ['./request-lines.component.css']
})
export class RequestLinesComponent implements OnInit {
  title: string = "Request Line";
  request: Request = new Request();
  lineItems: Lineitem[] = [];
  lineitem: Lineitem = new Lineitem();
  user: User = new User();
  vendor: Vendor[] = [];
  message?: string = undefined;

  constructor(private lineitemSvc: LineItemService, private vendorSvc: VendorService, private requestSvc: RequestService,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (params) => {
        this.request.id = params['requestId'];
        this.requestSvc.getRequestById(this.request.id).subscribe({
          next: (params) => {
            this.request = params;
            this.lineitemSvc.getLineitemsByRequestId(this.request.id).subscribe({
              next: (params) => {
                this.lineItems = params;
              },
              error: (err) => {
                console.log("Error getting all line items", err);
              },
              complete: () => { },
            });
            // get line items for request
            // use line item service to get all line items for the request (or request id)
            // this.lineItemSvc.getalllinesforrequest???? (don't 
            // subscribe
            // - next
            // -error
            // - contineu
          },
          error: (err) => {
            console.log("Error getting request by id:", err.message);
          },
          complete: () => { },
        });
      },
      error: (err) => {
        console.log('Error getting id from url:', err);
      },
      complete: () => { },

    });



    this.lineitemSvc.getLineItemById(this.lineitem.id).subscribe({
      next: (params) => {
        this.lineitem = params;

      },
      error: (err) => {
        this.message = 'error getting line item by id' + err.message;
      },
      complete: () => { }
    });
  }

  delete(lineitemId: number) {
    this.lineitemSvc.deleteLineItem(lineitemId).subscribe({
      next: (resp) => {
        if (resp == false) {

          this.message = 'LineitemDetailComponent - error deleting lineitem!.';

        } else {  this.requestSvc.getRequestById(this.request.id).subscribe({
          next: (params) => {
            this.request = params;
            this.lineitemSvc.getLineitemsByRequestId(this.request.id).subscribe({
              next: (params) => {
                this.lineItems = params;
              },
              error: (err) => {
                console.log("Error getting all line items", err);
              },
              complete: () => { },
            });
          },
          error: (err) => {
            console.log("Error getting request by id:", err.message);
          },
          complete: () => { },
        });
          // Refresh the request and Line Items for request
          // get the request
          // get the line items

          // don't need to do this... already in requestlines component
          //this.router.navigateByUrl("/requestlines/" + this.lineitem.id);
        }
      },
      error: (err) => {


        this.message =
          'lineitemDetailComponent - error deleting lineitem: ' + err.message;
      },
      complete: () => { },
    });

  }
  reviewRequest(){
    this.requestSvc.reviewRequest(this.request.id).subscribe({
      next: (resp) => {
        this.request = resp;
        this.router.navigateByUrl("/request/list");
      },
      error: (err) => {
        console.log("Error getting request:", err.message);
        this.message = "Error getting request "
      },
      complete: () => {}


    });
  
    //call submit request for review in request service
    //navigate to request list

  }
}


