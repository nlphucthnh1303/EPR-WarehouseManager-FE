import {Component, OnInit} from '@angular/core';
import {MenuTab, MenuItem} from "../model/menu.model";
import {ProfileMenuComponent} from "./profile-menu/profile-menu.component";
import {NotificationComponent} from "./notification/notification.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    ProfileMenuComponent,
    NotificationComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  menuHeaders!: MenuTab[];
  ngOnInit() {
    this.menuHeaders = [
      {
        titleMenu: 'Danh mục',
        linkMenu: undefined,
        iconMenu: undefined,
        childMenu: [
          { typeMenu: 'dropdown', titleMenu: "Loại nguyên vật liệu",linkMenu: "",iconMenu: ""},
          { typeMenu: 'dropdown', titleMenu: "Loại nguyên vật liệu",linkMenu: "",iconMenu: ""},
          { typeMenu: 'dropdown', titleMenu: "Nhóm nguyên vật liệu", linkMenu: "", iconMenu: "" },
          { typeMenu: 'divider', titleMenu: undefined, linkMenu: undefined, iconMenu: undefined },
          { typeMenu: 'dropdown', titleMenu: "Loại vật tư", linkMenu: "", iconMenu: "" },
          { typeMenu: 'dropdown', titleMenu: "Nhóm vật tư", linkMenu: "", iconMenu: "" },
          { typeMenu: 'divider', titleMenu: undefined, linkMenu: undefined, iconMenu: undefined },
          { typeMenu: 'dropdown', titleMenu: "Loại sản phẩm", linkMenu: "", iconMenu: "" },
          { typeMenu: 'dropdown', titleMenu: "Nhóm sản phẩm", linkMenu: "", iconMenu: "" },
          { typeMenu: 'divider', titleMenu: undefined, linkMenu: undefined, iconMenu: undefined },
          { typeMenu: 'dropdown', titleMenu: "Loại kho", linkMenu: "", iconMenu: "" },
          { typeMenu: 'dropdown', titleMenu: "Nhóm kho", linkMenu: "", iconMenu: "" },
          { typeMenu: 'divider', titleMenu: undefined, linkMenu: undefined, iconMenu: undefined },
          { typeMenu: 'dropdown', titleMenu: "Đơn vị tính", linkMenu: "", iconMenu: "" }
        ]
      },
      {
        titleMenu: 'Vận hành',
        linkMenu: undefined,
        iconMenu: undefined,
        childMenu: [
          { typeMenu: 'dropdown', titleMenu: "Nhân viên",linkMenu: "",iconMenu: ""},
          { typeMenu: 'dropdown', titleMenu: "Phân quyền",linkMenu: "",iconMenu: ""},
          { typeMenu: 'divider', titleMenu: undefined, linkMenu: undefined, iconMenu: undefined },
          { typeMenu: 'dropdown', titleMenu: "Chức vụ", linkMenu: "", iconMenu: "" },
          { typeMenu: 'dropdown', titleMenu: "Phòng ban", linkMenu: "", iconMenu: "" }
        ]
      },
      {
        titleMenu: 'Sản xuất',
        linkMenu: undefined,
        iconMenu: undefined,
        childMenu: [
          { typeMenu: 'dropdown', titleMenu: "Sản phẩm",linkMenu: "",iconMenu: ""},
          { typeMenu: 'dropdown', titleMenu: "Thành phẩm",linkMenu: "",iconMenu: ""},
          { typeMenu: 'dropdown', titleMenu: "Bán thành phẩm",linkMenu: "",iconMenu: ""},
          { typeMenu: 'dropdown', titleMenu: "Phế phẩm",linkMenu: "",iconMenu: ""},
          { typeMenu: 'divider', titleMenu: undefined, linkMenu: undefined, iconMenu: undefined },
          { typeMenu: 'dropdown', titleMenu: "Nguyên vật liệu", linkMenu: "", iconMenu: "" },
          { typeMenu: 'dropdown', titleMenu: "Vật tư", linkMenu: "", iconMenu: "" },
          { typeMenu: 'divider', titleMenu: undefined, linkMenu: undefined, iconMenu: undefined },
          { typeMenu: 'dropdown', titleMenu: "Nhà cung cấp", linkMenu: "", iconMenu: "" }
        ]
      },
      {
        titleMenu: 'Kho hàng',
        linkMenu: undefined,
        iconMenu: undefined,
        childMenu: [
          { typeMenu: 'dropdown', titleMenu: "Thiết lập kho",linkMenu: "",iconMenu: ""},
          { typeMenu: 'divider', titleMenu: undefined, linkMenu: undefined, iconMenu: undefined },
          { typeMenu: 'dropdown', titleMenu: "Nhập kho", linkMenu: "", iconMenu: "" },
          { typeMenu: 'dropdown', titleMenu: "Xuất kho", linkMenu: "", iconMenu: "" },
          { typeMenu: 'dropdown', titleMenu: "Chuyển kho", linkMenu: "", iconMenu: "" }

        ]
      }

    ]
  }

}
