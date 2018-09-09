import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import {HeaderMenuComponent} from "./components/HeaderMenu.component";
import {SideMenuComponent} from "./components/sideMenu/SideMenu.component";
import {ApplicationSideMenuComponent} from "./components/sideMenu/types/ApplicationSideMenu.component";
import {UnWrapDirective} from "./Directives/UnWrap.directive";
import { NgxEchartsModule } from 'ngx-echarts';
import {ApplicationManageComponent} from "./components/sideMenu/types/ApplicationManage.component";
import {MemoryManageComponent} from "./page/memoryManage/memoryManage.component";
import {MemoryManageModule} from "./page/memoryManage/memoryManage.module";
import { RouterModule } from "@angular/router";
import {ErrorMessageManageModule} from "./page/errorMessage/errorMessageManage.module";

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    HeaderMenuComponent,
    SideMenuComponent,
    ApplicationSideMenuComponent,
    UnWrapDirective,
    ApplicationManageComponent,
    MemoryManageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    NgxEchartsModule,
    MemoryManageModule,
    ErrorMessageManageModule,
    RouterModule.forRoot([], {useHash: true})
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
