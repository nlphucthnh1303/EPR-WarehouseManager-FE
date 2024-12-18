import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PrimeNG} from "primeng/config";
import {HeaderComponent} from "./header/header.component";


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    HeaderComponent
  ],
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'WarehouseManager';
  constructor(private primeng: PrimeNG) {}
  ngOnInit(): void {
    this.primeng.ripple.set(true);
  }
}
