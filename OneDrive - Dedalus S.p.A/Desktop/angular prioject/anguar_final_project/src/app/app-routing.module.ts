import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductdetailsComponent } from './user/home/productdetails/productdetails.component';
import { DietplandetailsComponent } from './user/dietplan/dietplandetails/dietplandetails.component';
import { ForumresponseComponent } from './user/forum/forumresponse/forumresponse.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  { path: "productdetails/:id", component: ProductdetailsComponent },
  { path: "dietplandetails/:id", component: DietplandetailsComponent },
  {path:"user",
  loadChildren:() => import('./user/user.module').then(m => m.UserModule)},
  {path:"admin",loadChildren: 
  () => import('./admin/admin.module').then(m => m.AdminModule)},
  {path:"forum/:id",component:ForumresponseComponent},
  {path:"post/:id",component:ForumresponseComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
