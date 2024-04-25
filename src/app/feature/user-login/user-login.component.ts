import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { SystemService } from 'src/app/service/system.service';
import { UserLogin } from 'src/app/model/userLogin';
import { User } from 'src/app/model/user';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  title: string = "User-Login";
  userLogin: UserLogin = new UserLogin();
  message?: string = undefined;

  constructor(private systemSvc: SystemService,private userSvc: UserService, private router: Router) { }

  ngOnInit(): void {

    //invalidate logged in user
    this.systemSvc.loggedInUser = new User();
    this.userLogin.username = "scrubtech78";
   this.userLogin.password = "nashville";
  }
  login(){
    this.userSvc.login(this.userLogin).subscribe({

      next:(resp) =>{
        this.systemSvc.loggedInUser = resp;
        this.router.navigateByUrl('/home');
      },
      error:(err) => {
        console.log(err);
        this.message ='Invalid username/pwd comb. Try Again';
      },
      complete:() =>{},
    });
  }
}




  


