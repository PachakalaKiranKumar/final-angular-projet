import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

  constructor(private router:Router,private ar:ActivatedRoute) { }

  ngOnInit(): void {
  }
  addproduct(){
    this.router.navigate(['Addproduct'],{relativeTo:this.ar})
  }
  addresponse(){
this.router.navigate(['Addresponses'],{relativeTo:this.ar})
  }
  }


