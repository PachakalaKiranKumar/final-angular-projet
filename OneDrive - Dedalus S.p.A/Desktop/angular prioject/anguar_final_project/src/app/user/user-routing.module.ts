import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DietplanComponent } from './dietplan/dietplan.component';
import { CreateComponent } from './create/create.component';
import { ForumComponent } from './forum/forum.component';
import { MenubarComponent } from './menubar/menubar.component';
import { HomeComponent } from './home/home.component';
import { ProductdetailsComponent } from './home/productdetails/productdetails.component';

const routes: Routes = [
  {
    path: "menubar", component: MenubarComponent,
    children: [
      { path: "", component: HomeComponent },
      { path: "home", component: HomeComponent },
      { path: "Dietplan", component: DietplanComponent },
      { path: "Create", component: CreateComponent },
      { path: "Forum", component: ForumComponent }
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
