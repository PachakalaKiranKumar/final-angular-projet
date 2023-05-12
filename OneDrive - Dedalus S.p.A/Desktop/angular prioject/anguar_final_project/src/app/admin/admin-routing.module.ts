import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AddresponseComponent } from './addresponse/addresponse.component';
import { ResponsepageComponent } from './addresponse/responsepage/responsepage.component';


const routes: Routes = [
  {path:"",component:AdminhomeComponent, children: [
    { path: "Addproduct", component: AddproductComponent  },
    {path: "Addresponses",component: AddresponseComponent},
    {path:"addresponse/:id",component:ResponsepageComponent}
   
    
  ]
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
