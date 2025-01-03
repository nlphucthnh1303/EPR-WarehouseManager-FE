import {Component, DestroyRef, inject, Inject, OnInit} from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import {PaginatorModule, PaginatorState} from 'primeng/paginator';
import {Department_GetAllRes} from "../../../model/department.model";
import {ColTable} from "../../../model/config.model";
import {DepartmentService} from "./department.service";
import {ModalComponent} from "../../component/modal/modal.component";
import { Editor } from 'primeng/editor';
  @Component({
  selector: 'app-department',
  standalone: true, imports: [TableModule, CommonModule, PaginatorModule, ModalComponent, Editor],
  templateUrl: './department.component.html',
  styleUrl: './department.component.css'
})
export class DepartmentComponent implements OnInit{
  public departmentList!: Department_GetAllRes[];
  public cols!: ColTable[];
  public paging!: {pagecurrent: number, TotalPage: number};
  public  first: number | undefined = 0;
  public  rows: number | undefined = 10;
  public departmentService = inject(DepartmentService);
  text: string | undefined;
  ngOnInit(): void {
    this.departmentList = [
          {
            DepartmentID: 1,
            DepartmentCode: "DEPT001",
            DepartmentName: "Phòng Ban Kế Toán",
            Description: "Quản lý các hoạt động kế toán của công ty",
            StatusID: 1,
            StatusName: "Đang Hoạt động",
            StaffCreateID: 1,
            StaffCreateName: 'Phúc thịnh',
            CreateDate: new Date(),
            IsActive: true
          },
          {
            DepartmentID: 2,
            DepartmentCode: "DEPT002",
            DepartmentName: "Phòng Ban Nhân Sự",
            Description: "Quản lý các hoạt động nhân sự của công ty",
            StatusID: 1,
            StatusName: "Đang Hoạt động",
            StaffCreateID: 1,
            StaffCreateName: 'Phúc thịnh',
            CreateDate: new Date(),
            IsActive: true
          },
          {
            DepartmentID: 1,
            DepartmentCode: "DEPT001",
            DepartmentName: "Phòng Ban Kế Toán",
            Description: "Quản lý các hoạt động kế toán của công ty",
            StatusID: 1,
            StatusName: "Đang Hoạt động",
            StaffCreateID: 1,
            StaffCreateName: 'Phúc thịnh',
            CreateDate: new Date(),
            IsActive: true
          },
          {
            DepartmentID: 2,
            DepartmentCode: "DEPT002",
            DepartmentName: "Phòng Ban Nhân Sự",
            Description: "Quản lý các hoạt động nhân sự của công ty",
            StatusID: 1,
            StatusName: "Đang Hoạt động",
            StaffCreateID: 1,
            StaffCreateName: 'Phúc thịnh',
            CreateDate: new Date(),
            IsActive: true
          },
          {
            DepartmentID: 1,
            DepartmentCode: "DEPT001",
            DepartmentName: "Phòng Ban Kế Toán",
            Description: "Quản lý các hoạt động kế toán của công ty",
            StatusID: 1,
            StatusName: "Đang Hoạt động",
            StaffCreateID: 1,
            StaffCreateName: 'Phúc thịnh',
            CreateDate: new Date(),
            IsActive: true
          },
          {
            DepartmentID: 2,
            DepartmentCode: "DEPT002",
            DepartmentName: "Phòng Ban Nhân Sự",
            Description: "Quản lý các hoạt động nhân sự của công ty",
            StatusID: 2,
            StatusName: "Dừng Hoạt động",
            StaffCreateID: 1,
            StaffCreateName: 'Phúc thịnh',
            CreateDate: new Date(),
            IsActive: true
          },
          {
            DepartmentID: 1,
            DepartmentCode: "DEPT001",
            DepartmentName: "Phòng Ban Kế Toán",
            Description: "Quản lý các hoạt động kế toán của công ty",
            StatusID: 2,
            StatusName: "Dừng Hoạt động",
            StaffCreateID: 1,
            StaffCreateName: 'Phúc thịnh',
            CreateDate: new Date(),
            IsActive: true
          },
          {
            DepartmentID: 2,
            DepartmentCode: "DEPT002",
            DepartmentName: "Phòng Ban Nhân Sự",
            Description: "Quản lý các hoạt động nhân sự của công ty",
            StatusID: 1,
            StatusName: "Hoạt động",
            StaffCreateID: 1,
            StaffCreateName: 'Phúc thịnh',
            CreateDate: new Date(),
            IsActive: true
          },
          {
            DepartmentID: 1,
            DepartmentCode: "DEPT001",
            DepartmentName: "Phòng Ban Kế Toán",
            Description: "Quản lý các hoạt động kế toán của công ty",
            StatusID: 1,
            StatusName: "Hoạt động",
            StaffCreateID: 1,
            StaffCreateName: 'Phúc thịnh',
            CreateDate: new Date(),
            IsActive: false
          },
          {
            DepartmentID: 2,
            DepartmentCode: "DEPT002",
            DepartmentName: "Phòng Ban Nhân Sự",
            Description: "Quản lý các hoạt động nhân sự của công ty",
            StatusID: 1,
            StatusName: "Hoạt động",
            StaffCreateID: 1,
            StaffCreateName: 'Phúc thịnh',
            CreateDate: new Date(),
            IsActive: false
          }
        ].map((department, index) => {
          return {
            Index: index + 1,
            ...department
          }
    })
    this.departmentService.getAll()
    this.departmentService.getAll().subscribe({
      next: (res: Department_GetAllRes[]) => {
        console.log('This is data',res);
      },
      error: (err: Error) => {
        console.log(err);
      },
      complete: () => {
        console.log('complete');
      }
    })

    this.cols = [
      {field: 'Index', header: 'STT'},
      {field: 'DepartmentCode', header: 'Mã bộ phận'},
      {field: 'DepartmentName', header: 'Tên bộ phận'},
      {field: 'Description', header: 'Mô tả'},
      {field: 'StaffCreateName', header: 'Người tạo'},
      {field: 'CreateDate', header: 'Ngày tạo'},
      {field: 'StatusName', header: 'Trạng thái'},
      {field: 'Action', header: ''},
    ]


  }

  onPageChange(event: PaginatorState) {
    this.first = event.first;
    this.rows = event.rows;
  }




}
