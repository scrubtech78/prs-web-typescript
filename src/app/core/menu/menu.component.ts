import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/model/menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  title: string = "";
  menuItems: MenuItem[]=[];

  constructor() { }

  ngOnInit(): void {
    //create items for menu
    this.menuItems.push(new MenuItem("User", "/user/list", "User List"));
    this.menuItems.push(new MenuItem("Vendor", "/vendor/list", "Vendor List"));
    this.menuItems.push(new MenuItem("Product", "/product/list", "Product List"));
    this.menuItems.push(new MenuItem("Request", "/request/list", "Request List"));
    this.menuItems.push(new MenuItem("Reviews","/reviews/list","Reviews List"));
    this.menuItems.push(new MenuItem("Login", "/user/login", "User Login"));
  }


  

  
  }


