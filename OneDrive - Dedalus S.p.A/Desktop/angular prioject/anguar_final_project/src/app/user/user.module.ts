import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { MenubarComponent } from './menubar/menubar.component';
import { MaterialModule } from '../material/material.module';

import { CreateComponent } from './create/create.component';
import { HomeComponent } from './home/home.component';
import { ForumComponent } from './forum/forum.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { ProductComponent } from './home/product/product.component';
import { RouterModule } from '@angular/router';
import { TypefilterPipe } from '../pipes/typefilter.pipe';
import { DietplanComponent } from './dietplan/dietplan.component';
import { DiettypeComponent } from './dietplan/diettype/diettype.component';
import { ForumtypeComponent } from './forum/forumtype/forumtype.component';
import { ProductdetailsComponent } from './home/productdetails/productdetails.component';

import { ForumresponseComponent } from './forum/forumresponse/forumresponse.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http,'./assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    MenubarComponent,
    HomeComponent,
    CreateComponent,
    ForumComponent,
    ProductComponent,
    TypefilterPipe,
    DietplanComponent,
    DiettypeComponent,
    ForumtypeComponent,
    ProductdetailsComponent,
    ForumresponseComponent
  
   

  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })
   
  
  ],
  exports:[
    HomeComponent,
    MenubarComponent,
    
  ]
})
export class UserModule { }
