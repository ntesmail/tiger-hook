import {NgModule} from "@angular/core";
import {AppCommonModule} from "../common/common.module";
import {Route, RouterModule} from "@angular/router";
import {ApplicationManageComponent} from "./applicationManage.component";
import {ApplicationSideComponent} from "./side-nav/ApplicationSideNav.component";

let routes: Route[] = [{
  path: 'application',
  component: ApplicationManageComponent,
  children: [{
    path: 'dashboard',
    loadChildren: './memoryManage/memoryManage.module#MemoryManageModule'
  }, {
    path: 'errorMessage',
    loadChildren: './errorMessage/errorMessageManage.module#ErrorMessageManageModule'
  }, {
    path: 'traceManage',
    loadChildren: './traceManage/traceManage.module#TraceManageModule'
  }]
}];

@NgModule({
  imports: [AppCommonModule, RouterModule.forChild(routes)],
  declarations: [ApplicationManageComponent, ApplicationSideComponent],
  exports: []
})
export class ApplicationManageModule{

}
