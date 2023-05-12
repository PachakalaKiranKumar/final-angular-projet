import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-diettype',
  templateUrl: './diettype.component.html',
  styleUrls: ['./diettype.component.css']
})
export class DiettypeComponent  {
  @Input() details:any;
}
