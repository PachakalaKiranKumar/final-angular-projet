import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AddproductComponent } from './addproduct/addproduct.component';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AddresponseComponent } from './addresponse/addresponse.component';
import { ResponsepageComponent } from './addresponse/responsepage/responsepage.component';
import { ResponseboxComponent } from './addresponse/responsebox/responsebox.component';




@NgModule({
  declarations: [
    AdminhomeComponent,
    AddproductComponent,
    AddresponseComponent,
    ResponsepageComponent,
    ResponseboxComponent
   
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    RouterModule,
    MaterialModule,    
    HttpClientModule

  ]
})
export class AdminModule { }
