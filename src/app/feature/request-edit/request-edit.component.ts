import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Request } from 'src/app/model/request';
import { RequestService } from 'src/app/service/request.service';

@Component({
  selector: 'app-request-edit',
  templateUrl: './request-edit.component.html',
  styleUrls: ['./request-edit.component.css']
})
export class RequestEditComponent implements OnInit {
  title: string= "Request-Edit";
  request: Request = new Request();
  requestId: number = 0;
  message?: string = undefined;


  constructor(private requestSvc: RequestService, private router: Router,
   private route: ActivatedRoute) { }

  ngOnInit(): void {
  
    this.route.params.subscribe({
      next: parms =>{
        this.requestId = parms["id"];
        this.requestSvc.getRequestById(this.requestId).subscribe({
          next: (parms) =>{
          this.request = parms;
          }
        })
      }
     
    })
  }
  //requestId(requestId: any) {
   // throw new Error('Method not implemented.');
  
    save(): void{
      //check for existance before save?
      console.log("save user:", this.request);
      this.requestSvc.updateRequest(this.request).subscribe({
       next: (resp) =>{
        this.request = resp;
        this.router.navigateByUrl("/request/list");
       },
       error:(err)=>{
        console.log("Error creating request:", err);
        this.message = "Error creating request"
       },
       complete:() =>{}
         
       
      });

  

 
  }

}


  


  


