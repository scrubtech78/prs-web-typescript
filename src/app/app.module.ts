import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './feature/user-list/user-list.component';
import { UserCreateComponent } from './feature/user-create/user-create.component';
import { UserDetailsComponent } from './feature/user-details/user-details.component';
import { UserEditComponent } from './feature/user-edit/user-edit.component';
import { FormsModule } from '@angular/forms';
import { VendorListComponent } from './feature/vendor-list/vendor-list.component';
import { VendorCreateComponent } from './feature/vendor-create/vendor-create.component';
import { VendorDetailComponent } from './feature/vendor-detail/vendor-detail.component';
import { VendorEditComponent } from './feature/vendor-edit/vendor-edit.component';
import { ProductListComponent } from './feature/product-list/product-list.component';
import { ProductCreateComponent } from './feature/product-create/product-create.component';
import { ProductDetailComponent } from './feature/product-detail/product-detail.component';
import { ProductEditComponent } from './feature/product-edit/product-edit.component';
import { RequestListComponent } from './feature/request-list/request-list.component';
import { RequestCreateComponent } from './feature/request-create/request-create.component';
import { RequestDetailComponent } from './feature/request-detail/request-detail.component';
import { RequestEditComponent } from './feature/request-edit/request-edit.component';
import { MenuComponent } from './core/menu/menu.component';
import { UserLoginComponent } from './feature/user-login/user-login.component';
import { LineitemCreateComponent } from './feature/lineitem-create/lineitem-create.component';
import { LineitemEditComponent } from './feature/lineitem-edit/lineitem-edit.component';
import { RequestLinesComponent } from './feature/request-lines/request-lines.component';
import { LineItemComponent } from './feature/line-item/line-item.component';
import { ReviewsRequestComponent } from './feature/reviews-request/reviews-request.component';
import { RequestApproveRejectComponent } from './feature/request-approve-reject/request-approve-reject.component';



@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserCreateComponent,
    UserDetailsComponent,
    UserEditComponent,
    VendorListComponent,
    VendorCreateComponent,
    VendorDetailComponent,
    VendorEditComponent,
    ProductListComponent,
    ProductCreateComponent,
    ProductDetailComponent,
    ProductEditComponent,
    RequestListComponent,
    RequestCreateComponent,
    RequestDetailComponent,
    RequestEditComponent,
    MenuComponent,
    UserLoginComponent,
    LineitemCreateComponent,
    LineitemEditComponent,
    RequestLinesComponent,
    LineItemComponent,
    ReviewsRequestComponent,
    RequestApproveRejectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
