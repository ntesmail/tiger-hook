import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {NgZorroAntdModule} from "ng-zorro-antd";
import {NgxEchartsModule} from "ngx-echarts";

let modules: any[] = [
  BrowserModule,
  BrowserAnimationsModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
  NgZorroAntdModule,
  NgxEchartsModule
];

@NgModule({
  imports: [...modules],
  exports: [...modules]
})
export class AppCommonModule{

}
