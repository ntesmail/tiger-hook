import {NgModule} from "@angular/core";
import {Route, RouterModule} from "@angular/router";
import {MemoryManageComponent} from "./memoryManage.component";

const routers: Route[] = [{
  path: 'application/dashboard',
  component: MemoryManageComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routers)],
  declarations: [],
  exports: []
})
export class MemoryManageModule{

}
