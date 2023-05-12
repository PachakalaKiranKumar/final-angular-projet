import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
@Component({

selector: 'app-home',
templateUrl: './home.component.html',
styleUrls: ['./home.component.css']
})
export class HomeComponent  {
    productlist:any;
    filterList:any;

    types:string[]=[
      "All",
      "Salads",
      "Fruits",
      "Juices",
      "Vegetables"      
    ]
    selected:string="All";
    searchValue:string="";
    
          constructor(private fs:ProductService)  {
             this.fs.getProducts().subscribe(
                {
                    next : (data:any)=> {
                        this.productlist =data;
                        this.filterList=data;
                },
                error:()=>{
                    this.productlist=[];
                    this.filterList=[];
                }
            }
             )
            }
            filterProducts() {

                    if (this.selected === "All") {
                
                      this.filterList = this.productlist;
                
                    } else {
                
                      this.filterList = this.productlist.filter((product:any) => product.type === this.selected);
                
                    }
                
                    if (this.searchValue !== "") {
                
                      this.filterList = this.filterList.filter((product:any) => product.name.toLowerCase().includes(this.searchValue.toLowerCase()));
                
                    }
                
                  }
        }
        
   
