import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/service/request.service';
import { Request } from 'src/app/model/request';
@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {
  title: string = "Request-List";
  
  request?: Request[] = undefined;

constructor(private requestSvc: RequestService) { }

 

  ngOnInit(): void {
    this.requestSvc.getAllRequest().subscribe({
      next:(resp) =>{
        this.request=resp;
      },
      error: (err) => {
        console.log(err);
      },
      complete: ()=>{}
    });
  }


}
