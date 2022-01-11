import { Component, Input, OnInit, Output,EventEmitter  } from '@angular/core';


@Component({
  selector: 'app-filter-users',
  templateUrl: './filter-users.component.html',
  styleUrls: ['./filter-users.component.css']
})
export class FilterUsersComponent implements OnInit {
     
     @Input()
  firstname!: String;
   
  @Input()
  lastname!: String;

  @Output()
  updatedList=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  updateUser()
  {
    const userObj={userId:11,userName:'Deepak dubey'}
    this.updatedList.emit(userObj);
  }

}
