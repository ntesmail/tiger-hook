import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import {HeaderMenuComponent} from "./components/HeaderMenu.component";
import {SideMenuComponent} from "./components/sideMenu/SideMenu.component";
import {ApplicationSideMenuComponent} from "./components/sideMenu/types/ApplicationSideMenu.component";
import {UnWrapDirective} from "./Directives/UnWrap.directive";
import { RouterModule } from "@angular/router";
import {ErrorMessageManageModule} from "./page/errorMessage/errorMessageManage.module";
import {AppCommonModule} from "./common/common.module";
import {TraceManageModule} from "./page/traceManage/traceManage.module";
import {ApplicationManageModule} from "./page/applicationManage.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    HeaderMenuComponent,
    SideMenuComponent,
    ApplicationSideMenuComponent,
    UnWrapDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppCommonModule,
    // ErrorMessageManageModule,
    // TraceManageModule,
    ApplicationManageModule,
    RouterModule.forRoot([], {useHash: true})
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
