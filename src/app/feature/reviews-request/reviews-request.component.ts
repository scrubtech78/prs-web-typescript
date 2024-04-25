import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from 'src/app/service/request.service';
import { Request } from 'src/app/model/request';
import { SystemService } from 'src/app/service/system.service';
@Component({
  selector: 'app-reviews-request',
  templateUrl: './reviews-request.component.html',
  styleUrls: ['./reviews-request.component.css']
})
export class ReviewsRequestComponent implements OnInit {
  title: string = "Reviews-List";

  requests: Request[]= [];


  constructor(private requestSvc: RequestService,private systemSvc: SystemService,private route:Router ) { 

  }

  ngOnInit(): void {
    this.requestSvc.getAllRequestsInReview(this.systemSvc.loggedInUser.id).subscribe({
      next:(resp) =>{
        this.requests=resp;
        this.route.navigateByUrl("/reviews/list");
      },
      error: (err) => {
        console.log(err);
      },
      complete: ()=>{}
    });
  }

  }


