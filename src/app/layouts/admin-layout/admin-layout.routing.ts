import { Routes } from "@angular/router";

import { DashboardComponent } from "../../dashboard/dashboard.component";
import { QuanlythucdonComponent } from "../../quanlythucdon/quanlythucdon.component";
import { QuanlybanComponent } from "../../quanlyban/quanlyban.component";
import { QuanlybanhangComponent } from "../../quanlybanhang/quanlybanhang.component";
import { QuanlykhachhangComponent } from "../../quanlykhachhang/quanlykhachhang.component";
import { LoginComponent } from "../../login/login.component";
import { UserprofileComponent } from "../../userprofile/userprofile.component";

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "thucdon", component: QuanlythucdonComponent },
  {
    path: "danhmucban",
    component: QuanlybanComponent,
  },
  { path: "banhang", component: QuanlybanhangComponent },
  { path: "khachhang", component: QuanlykhachhangComponent },
  { path: 'userprofile',   component: UserprofileComponent },
];
