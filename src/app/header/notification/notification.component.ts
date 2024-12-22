import {Component, OnInit} from '@angular/core';
import {Notification} from "../../model/notification.model";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css'
})
export class NotificationComponent implements OnInit {
  notifications!: Notification[];

  ngOnInit(): void {
      this.notifications = [
        {userAvatar: 'avatar30.png',title: 'Phúc Thịnh', content: 'who knows, maybe that would be the best thing for me...', time: '12:03 am', state: false},
        {userAvatar: 'avatar32.png',title: 'Phúc Thịnh', content: 'who knows, maybe that would be the best thing for me...', time: '12:03 am', state: false},
        {userAvatar: 'avatar33.png',title: 'Phúc Thịnh', content: 'who knows, maybe that would be the best thing for me...', time: '12:03 am', state: true},
        {userAvatar: 'avatar31.png',title: 'Phúc Thịnh', content: 'who knows, maybe that would be the best thing for me...', time: '12:03 am', state: false},
      ]
  }




}
