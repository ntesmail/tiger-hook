import {Component, OnInit} from "@angular/core";
import {Location} from "@angular/common";
import {AppLocationService} from "../common/AppLocation.service";

@Component({
  templateUrl: './applicationManage.component.html'
})
export class ApplicationManageComponent{
  constructor(
    private location: Location,
    private appLocationService: AppLocationService
  ){
  }
}
