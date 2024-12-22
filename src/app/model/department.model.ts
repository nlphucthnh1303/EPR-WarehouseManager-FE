export interface Department_GetAllRes {
  DepartmentID: number;
  DepartmentCode: string;
  DepartmentName: string;
  Description: string;
  StatusID: number;
  StatusName: string;
  StaffCreateID: number;
  StaffCreateName: string;
  CreateDate: Date;
  IsActive: boolean;
}

export interface Department_GetByIdRes {
  DepartmentID: number;
  DepartmentCode: string;
  DepartmentName: string;
  Description: string;
  StaffCreateID: number;
  StaffCreateName: string;
  StaffUpdateID: number;
  StaffUpdateName: string;
  CreateDate: Date;
  UpdateDate: Date;
}

export interface Department_CreateReq {
  DepartmentCode: string;
  DepartmentName: string;
  Description: string;
  StatusID: number;
  StaffCreateID: number;
}

export interface Department_UpdateReq {
  DepartmentID: number;
  DepartmentCode: string;
  DepartmentName: string;
  Description: string;
  StatusID: number;
  StaffUpdateID: number;
}


