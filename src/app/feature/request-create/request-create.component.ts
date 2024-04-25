import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Request } from 'src/app/model/request';
import { RequestService } from 'src/app/service/request.service';
import { SystemService } from 'src/app/service/system.service';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {
  title: string = "RequestCreateComponent";
  request: Request = new Request();
  user:User=new User();
 
  message?: string = undefined;

  constructor(private requestSvc: RequestService, private systemSvc: SystemService, 
    private router: Router, private userService: UserService) { }

  ngOnInit(): void {
   this.request.user = this.systemSvc.loggedInUser;
    
  }
  save(): void {
    console.log("save request", this.request);
    this.requestSvc.createRequest(this.request).subscribe({
      next: (resp) => {
        this.request = resp;
        this.router.navigateByUrl("/request/list");
      },
      error: (err) => {
        console.log("Error creating request:", err);
        this.message = "Error creating Request"
      },
      complete: () => {}


    });
  }




}


 

 
  


