import {NgModule} from "@angular/core";
import {AppCommonModule} from "../../common/common.module";
import {NodeListComponent} from "./nodeList.component";

@NgModule({
  imports: [AppCommonModule],
  exports: [NodeListComponent],
  declarations: [NodeListComponent]
})
export class ApplicationCommonModule{

}
