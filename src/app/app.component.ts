import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PrimeNG} from "primeng/config";
import {HeaderComponent} from "./header/header.component";
import {BreadcrumbComponent} from "./breadcrumb/breadcrumb.component";
import {DepartmentComponent} from "./page/department/department.component";
import {ModalComponent} from "./component/modal/modal.component";


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    HeaderComponent,
    BreadcrumbComponent,
    DepartmentComponent,
    ModalComponent
  ],
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'WarehouseManager';
  constructor(private primeng: PrimeNG) {}

  ngOnInit(): void {
    this.primeng.ripple.set(true);
  }

  openModal() {

  }
}
