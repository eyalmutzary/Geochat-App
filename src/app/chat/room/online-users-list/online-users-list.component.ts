import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-online-users-list',
  templateUrl: './online-users-list.component.html',
  styleUrls: ['./online-users-list.component.css']
})
export class OnlineUsersListComponent implements OnInit {
  users = [{
    name: "Eyal Mutzary",
    avatar: "https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png"
  },
  {
    name: "Eran Michaeli",
    avatar: "https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png"
  },
  {
    name: "Gil Sadeh",
    avatar: "https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png"
  },
  {
    name: "Lorem Ipsum",
    avatar: "https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png"
  },]
  constructor() { }

  ngOnInit() {
  }

}
