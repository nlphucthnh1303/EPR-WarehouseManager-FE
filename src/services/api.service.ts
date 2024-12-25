import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl:string = "http://localhost:7280/api";

  //URL
  public departmentUrl = this.apiUrl + "/Department/";

}
