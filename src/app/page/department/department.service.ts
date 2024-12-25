import {inject, Inject, Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {ApiService} from "../../../services/api.service";
import {
  Department_CreateReq,
  Department_GetAllRes,
  Department_GetByIdRes,
  Department_UpdateReq
} from "../../../model/department.model";
@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  constructor() { }
  public apiSerivce = inject(ApiService);
  public httpClient = inject(HttpClient);
  httpOptions = {
    headers:new HttpHeaders({'Content-Type':'Application/json'})
  }
  getAll():Observable<Department_GetAllRes[]>{
    return this.httpClient.get<Department_GetAllRes[]>(this.apiSerivce.departmentUrl + "GetAll", this.httpOptions);
  }

  getById(departmentID: number):Observable<Department_GetByIdRes[]>{
    return this.httpClient.get<Department_GetByIdRes[]>(this.apiSerivce.departmentUrl + "getById/" + departmentID);
  }

  create(req: Department_CreateReq):Observable<number>{
    return this.httpClient.post<number>(this.apiSerivce.departmentUrl + "create", req);
  }

  update(req: Department_UpdateReq):Observable<boolean>{
    return this.httpClient.put<boolean>(this.apiSerivce.departmentUrl + "upadte", req);
  }

  delete(departmentID: number):Observable<number>{
    return this.httpClient.delete<number>(this.apiSerivce.departmentUrl + "delete/" +departmentID);
  }



}
