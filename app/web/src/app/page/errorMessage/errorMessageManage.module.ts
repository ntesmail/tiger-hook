import {NgModule} from "@angular/core";
import {Route, RouterModule} from "@angular/router";
import {ErrorMessageManageComponent} from "./errorMessageManage.component";
import {AppCommonModule} from "../../common/common.module";
import {ApplicationCommonModule} from "../common/applicationCommon.module";

let routers: Route[] = [{
  path: '',
  component: ErrorMessageManageComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routers), AppCommonModule, ApplicationCommonModule],
  declarations: [ErrorMessageManageComponent],
  exports: []
})
export class ErrorMessageManageModule{
}
