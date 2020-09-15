import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/thucdon', title: 'Quản lý thực đơn',  icon:'food_bank', class: '' },
    { path: '/danhmucban', title: 'Quản lý bàn',  icon:'content_paste', class: '' },
    { path: '/banhang', title: 'Quản lý bán hàng',  icon:'library_books', class: '' },
    { path: '/khachhang', title: 'Quản lý khách hàng',  icon:'person', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
