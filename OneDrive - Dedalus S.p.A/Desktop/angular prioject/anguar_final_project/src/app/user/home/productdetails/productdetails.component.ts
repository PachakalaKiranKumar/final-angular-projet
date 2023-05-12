import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent {

 id: any;
products: any;
constructor(private ds:ProductService, private ar: ActivatedRoute) {
this.ar.params.subscribe(
 {
 next: (params) => {
 this.id = params['id']
this.readData()
 },

error: () => this.id = 0
}

)
 }
readData() {
 
this.ds.getDetails(this.id).subscribe({
 next: (data: any) => this.products = data,
 error: () => this.products = {}
 })
 }
}
