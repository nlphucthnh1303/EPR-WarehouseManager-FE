import {Component, OnInit} from '@angular/core';
import {MenuItem} from "../../../model/menu.model";

@Component({
  selector: 'app-profile-menu',
  standalone: true,
  imports: [],
  templateUrl: './profile-menu.component.html',
  styleUrl: './profile-menu.component.css'
})
export class ProfileMenuComponent implements OnInit {
  menuProfile! : MenuItem[];
  ngOnInit(): void {
      this.menuProfile = [
        { typeMenu: 'dropdown', titleMenu: "Cài đặt",linkMenu: "",iconMenu: "ph-gear"},
        { typeMenu: 'divider', titleMenu: undefined, linkMenu: undefined, iconMenu: undefined },
        { typeMenu: 'dropdown', titleMenu: "Thêm tài khoản",linkMenu: "",iconMenu: "ph-plus"},
        { typeMenu: 'dropdown', titleMenu: "Đăng xuất",linkMenu: "",iconMenu: "ph-sign-out"},
      ]
    }

}
