import {Component, Input, OnInit} from '@angular/core';
import { Breadcrumb } from 'primeng/breadcrumb';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [Breadcrumb],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.css'
})
export class BreadcrumbComponent implements OnInit {
  @Input() contents!:MenuItem[];
  home: MenuItem | undefined;

  ngOnInit(): void {
    this.contents = [
      { label: 'Computer' },
      { label: 'Accessories' },
      { label: 'Keyboard' }
    ];
    this.home = { icon: 'ph ph-house', routerLink: '/' };
  }

}
