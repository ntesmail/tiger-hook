import {NgModule} from "@angular/core";
import {Route, RouterModule} from "@angular/router";
import {MemoryManageComponent} from "./memoryManage.component";
import {AppCommonModule} from "../../common/common.module";

const routers: Route[] = [{
  path: '',
  component: MemoryManageComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routers), AppCommonModule],
  declarations: [MemoryManageComponent],
  exports: []
})
export class MemoryManageModule{

}
