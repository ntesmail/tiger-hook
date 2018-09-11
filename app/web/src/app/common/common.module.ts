import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {NgZorroAntdModule} from "ng-zorro-antd";
import {NgxEchartsModule} from "ngx-echarts";
import {ApplicationService} from "./Application.service";
import {CommonModule} from "@angular/common";
import {AppLocationService} from "./AppLocation.service";

let modules: any[] = [
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
  NgZorroAntdModule,
  NgxEchartsModule,
  CommonModule
];

let services: any[] = [
  ApplicationService,
  AppLocationService
];

@NgModule({
  imports: [...modules],
  providers: [...services],
  exports: [...modules]
})
export class AppCommonModule{

}
