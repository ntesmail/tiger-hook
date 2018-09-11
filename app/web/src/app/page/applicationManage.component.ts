import {Component, OnInit} from "@angular/core";
import {Location} from "@angular/common";
import {AppLocationService} from "../common/AppLocation.service";

@Component({
  templateUrl: './applicationManage.component.html'
})
export class ApplicationManageComponent implements OnInit{
  appName: String = '';
  constructor(
    private location: Location,
    private appLocationService: AppLocationService
  ){
  }

  ngOnInit(): void {
    let {queryParams} = this.appLocationService.generateUrl();
    if(queryParams["app"]){
      this.appName = queryParams["app"];
    }
  }
}
