import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Request } from 'src/app/model/request';
import { RequestService } from 'src/app/service/request.service';
import { SystemService } from 'src/app/service/system.service';
@Component({
  selector: 'app-request-approve-reject',
  templateUrl: './request-approve-reject.component.html',
  styleUrls: ['./request-approve-reject.component.css']
})
export class RequestApproveRejectComponent implements OnInit {
  title: string ="Review-Approve/Reject"
  request: Request = new Request();
  message?: string = undefined;

  constructor(private router: ActivatedRoute,private systemSvc: SystemService,private requestSvc: RequestService, private route: Router, ) { }

  ngOnInit(): void {
    this.router.params.subscribe({
      next: (params) => {
        this.request.id = params['requestId'];
        this.requestSvc.getRequestById(this.request.id).subscribe({
          next: (params) => {
            this.request = params;
           
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


  }
    //get requestid from url
    //get  request for request id
 
  
  approve(){
    
    this.requestSvc.approveRequest(this.request.id).subscribe({
      next:(resp) =>{
        this.request=resp;
        this.route.navigateByUrl("/request/approve/reject/");
      },
      error: (err) => {
        console.log(err);
      },
      complete: ()=>{}
    });
  }
  reject(){
    this.requestSvc.rejectRequest(this.request.id).subscribe({
      next:(resp)=>{
        this.request=resp;
        this.route.navigateByUrl("/request/approve/reject/");
      },
      error:(err)=>{
        console.log(err);
      },
      complete: ()=>{}
    });
  }
    save(): void{
      //check for existance before save?
      console.log("save user:", this.request);
      this.requestSvc.updateRequest(this.request).subscribe({
       next: (resp) =>{
        this.request = resp;
        this.route.navigateByUrl("/request/list");
       },
       error:(err)=>{
        console.log("Error creating request:", err);
        this.message = "Error creating request"
       },
       complete:() =>{}
         
       
      });
    }
    
  }

  


