import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vendor } from 'src/app/model/vendor';
import { UserService } from 'src/app/service/user.service';
import { VendorService } from 'src/app/service/vendor.service';

@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent implements OnInit {
  title: string = "VendorCreateComponent";
  vendor: Vendor = new Vendor();
  message?: string = undefined;

  constructor(private vendorSvc: VendorService, private router: Router) { }

  ngOnInit(): void {
  }
  save(): void {
    console.log("save vendor", this.vendor);
    this.vendorSvc.createVendor(this.vendor).subscribe({
      next: (resp) => {
        this.vendor = resp;
        this.router.navigateByUrl("/vendor/list");
      },
      error: (err) => {
        console.log("Error creating vendor:", err);
        this.message = "Error creating Vendor"
      },
      complete: () => {}


    });
  }

}
