import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RequestService } from 'src/app/service/request.service';
import { Request } from 'src/app/model/request';
@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {
  title: string ="Request-Detail";
  request: Request = new Request();
  requestId: number =0;
  message?: string = undefined;

  constructor(private requestSvc: RequestService, private router: Router,
              private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (params)=>{
        this.requestId= params['id'];
      this.requestSvc.getRequestById(this.requestId).subscribe({
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
  delete() {
    this.requestSvc.deleteRequest(this.requestId).subscribe({
      next: (resp) => {
        if (resp == false) {
          console.log('RequestDetailComponent - error deleting request.');
          this.message = 'RequestrDetailComponent - error deleting request.';
        } else {
          this.router.navigateByUrl('request/list');
        }
      },
      error: (err) => {
        console.log(
          'RequestDetailComponent - Error deleting request: ' + err.message
        );
        this.message =
          'RequestDetailComponent - error deleting request: ' + err.message;
      },
      complete: () => {},
    });

}
}



 
 


