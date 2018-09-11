import {Component, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AppLocationService} from "../../common/AppLocation.service";

@Component({
  templateUrl: './errorMessageManage.component.html'
})
export class ErrorMessageManageComponent implements OnInit{
  errorMessages: any[] = [];
  constructor(
    private httpClient: HttpClient,
    private appLocation: AppLocationService
  ){
  }

  ngOnInit(): void {
    let params = {
      "app": this.appLocation.generateUrl().queryParams["app"]
    };
    this.httpClient.get("/xhr/application/getErrorMessage.do", {params}).subscribe((data: any)=> {
      let keys = Object.keys(data.data);
      this.errorMessages = keys.map(item => {
        let md5 = item;
        let content = data.data[item];
        content.message = content.message.replace(/\n/g, '<br/>');
        content.stack = content.stack.replace(/\n/g, '<br/>');
        return {
          md5,
          content
        }
      });
      console.log(this.errorMessages);
    })
  }

}
