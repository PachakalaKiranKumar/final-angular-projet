import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-forumtype',
  templateUrl: './forumtype.component.html',
  styleUrls: ['./forumtype.component.css']
})
export class ForumtypeComponent  {

 @Input() f:any;

}
