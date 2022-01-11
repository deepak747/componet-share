import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  fname="Deepak Bhai";
  lname="Dubey";
  constructor() { }
         
  ngOnInit(): void {
  }

  usersdata(event: any)
  {
          console.log("Event data is",event);
  }

}
