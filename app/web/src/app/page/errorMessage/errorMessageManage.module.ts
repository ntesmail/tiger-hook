import {NgModule} from "@angular/core";
import {Route, RouterModule} from "@angular/router";
import {ErrorMessageManageComponent} from "./errorMessageManage.component";
import {AppCommonModule} from "../../common/common.module";

let routers: Route[] = [{
  path: '',
  component: ErrorMessageManageComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routers), AppCommonModule],
  declarations: [ErrorMessageManageComponent],
  exports: []
})
export class ErrorMessageManageModule{
}
