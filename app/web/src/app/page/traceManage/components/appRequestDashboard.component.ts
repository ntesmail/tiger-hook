import {Component, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ApplicationService} from "../../../common/Application.service";
import {AppLocationService} from "../../../common/AppLocation.service";

interface HttpRequestInfo{
  url: string,
  method: string,
  averageUseTime: number,
  count: number,
  percent?: number
}

@Component({
  selector: 'app-request-dashboard',
  templateUrl: './appRequestDashboard.component.html',
  styles: [`
    .m-httpRequestInfo{
      padding: 20px;
      border: 1px solid #ccc;
      margin-bottom: 20px;
      padding: 5px;
      border-radius: 4px;
    }
    ul{
      list-style: none;
    }
  `]
})
export class AppRequestDashboardComponent implements OnInit{
  httpRequestInfos: HttpRequestInfo[] = [];

  constructor(
    private httpClient: HttpClient,
    private appLocation: AppLocationService
  ){

  }

  ngOnInit(): void {
    this.initHttpRequqestInfos();
  }

  initHttpRequqestInfos(){
    let self = this;
    let params = {
      "app": this.appLocation.generateUrl().queryParams["app"]
    };
    this.httpClient.get("/xhr/application/getHttpRequestInfos.do", {params: params}).subscribe((data: any)=>{
      let counts = data.data.reduce((currentValue: number, item: HttpRequestInfo)=>{
        return currentValue + item.count;
      }, 0);

      data.data.map(item=>{
        item.percent = (item.count / counts * 100).toFixed(2);
      });

      self.httpRequestInfos = data.data.sort((a: HttpRequestInfo, b:HttpRequestInfo)=>{
        return b.count > a.count;
      });
    })
  }

}
