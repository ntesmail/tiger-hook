import {NgModule} from "@angular/core";
import {AppCommonModule} from "../../common/common.module";
import {Route, RouterModule} from "@angular/router";
import {TraceManageComponent} from "./traceManage.component";
import {AppRequestDashboardComponent} from "./components/appRequestDashboard.component";

const routers: Route[] = [{
  path: '',
  component: TraceManageComponent
}];

@NgModule({
  imports: [AppCommonModule, RouterModule.forChild(routers)],
  declarations: [TraceManageComponent, AppRequestDashboardComponent],
  exports: []
})
export class TraceManageModule{

}
