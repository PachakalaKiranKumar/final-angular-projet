import { Component } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { DietplanservicesService } from 'src/app/services/dietplanservices.service';
@Component({
selector: 'app-dietplandetails',
templateUrl: './dietplandetails.component.html',
styleUrls: ['./dietplandetails.component.css']
})

export class DietplandetailsComponent {
  id: any;
  details: any = {}; // initialize as empty object instead of undefined
  constructor(private ds: DietplanservicesService, private ar: ActivatedRoute) {
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
      next: (data: any) => {
        this.details = data;
      },
      error: (err) => {
        console.log(err);
        this.details = {};
      }
    });
  }
  
}

  
  


  


