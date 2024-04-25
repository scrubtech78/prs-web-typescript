import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './feature/user-list/user-list.component';
import { UserCreateComponent } from './feature/user-create/user-create.component';
import { UserDetailsComponent } from './feature/user-details/user-details.component';
import { UserEditComponent } from './feature/user-edit/user-edit.component';
import { VendorListComponent } from './feature/vendor-list/vendor-list.component';
import { VendorCreateComponent } from './feature/vendor-create/vendor-create.component';
import { VendorEditComponent } from './feature/vendor-edit/vendor-edit.component';
import { VendorDetailComponent } from './feature/vendor-detail/vendor-detail.component';
import { ProductListComponent } from './feature/product-list/product-list.component';
import { ProductCreateComponent } from './feature/product-create/product-create.component';
import { ProductEditComponent } from './feature/product-edit/product-edit.component';
import { ProductDetailComponent } from './feature/product-detail/product-detail.component';
import { RequestListComponent } from './feature/request-list/request-list.component';
import { RequestCreateComponent } from './feature/request-create/request-create.component';
import { RequestEditComponent } from './feature/request-edit/request-edit.component';
import { RequestDetailComponent } from './feature/request-detail/request-detail.component';
import { UserLoginComponent } from './feature/user-login/user-login.component';
import { LineitemCreateComponent } from './feature/lineitem-create/lineitem-create.component';
import { RequestLinesComponent } from './feature/request-lines/request-lines.component';
import { LineitemEditComponent } from './feature/lineitem-edit/lineitem-edit.component';
import { ReviewsRequestComponent } from './feature/reviews-request/reviews-request.component';
import { RequestApproveRejectComponent } from './feature/request-approve-reject/request-approve-reject.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'user/login',component:UserLoginComponent},
  { path: 'home', component: UserListComponent },
  {path:'user/list', component: UserListComponent},
  {path:'user/create', component:UserCreateComponent},
  {path:'user/detail/:id',component:UserDetailsComponent},
  {path:'user/edit/:id',component:UserEditComponent},
  {path: 'vendor/list',component:VendorListComponent},
  {path: 'vendor/create', component:VendorCreateComponent},
  {path:'vendor/edit/:id',component:VendorEditComponent},
  {path:'vendor/detail/:id',component:VendorDetailComponent},
  {path: 'product/list',component:ProductListComponent},
  {path:'product/create', component:ProductCreateComponent},
  {path:'product/edit/:id',component:ProductEditComponent},
  {path:'product/detail/:id',component:ProductDetailComponent},
  {path:'request/list',component:RequestListComponent},
  {path:'request/create',component:RequestCreateComponent},
  {path:'request/edit/:id',component:RequestEditComponent},
  {path:'request/detail/:id',component:RequestDetailComponent},
  {path:'lineitem/create/:requestId',component:LineitemCreateComponent},
  {path:'requestlines/:requestId', component:RequestLinesComponent},
  {path:'lineitems',component:LineitemCreateComponent},
  {path:'lineitem/request/:requestId',component:RequestLinesComponent},
  {path:'lineitem/edit/:requestId',component:LineitemEditComponent},
  {path:'reviews/list',component:ReviewsRequestComponent},
  {path:'request/approve-reject/:requestId',component:RequestApproveRejectComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
