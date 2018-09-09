import {NgModule} from "@angular/core";
import {Route, RouterModule} from "@angular/router";
import {ErrorMessageManageComponent} from "./errorMessageManage.component";

let routers: Route[] = [{
  path: 'application/errorMessage',
  component: ErrorMessageManageComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routers)],
  declarations: [ErrorMessageManageComponent],
  exports: []
})
export class ErrorMessageManageModule{
}
