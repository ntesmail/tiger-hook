import {Component, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";

interface HttpRequestInfo{
  url: string,
  method: string,
  averageUseTime: number,
  count: number,
  percent?: number
}

@Component({
  selector: 'app-request-dashboard',
  templateUrl: './appRequestDashboard.component.html'
})
export class AppRequestDashboardComponent implements OnInit{
  httpRequestInfos: HttpRequestInfo[] = [];

  constructor(private httpClient: HttpClient){

  }

  ngOnInit(): void {
    this.initHttpRequqestInfos();
  }

  initHttpRequqestInfos(){
    let self = this;
    this.httpClient.get("/xhr/application/getHttpRequestInfos.do").subscribe((data: any)=>{
      let counts = data.data.reduce((currentValue: number, item: HttpRequestInfo)=>{
        return currentValue + item.count;
      }, 0);

      data.data.map(item=>{
        item.percent = item.count / counts * 100;
      });

      self.httpRequestInfos = data.data.sort((a: HttpRequestInfo, b:HttpRequestInfo)=>{
        return b.count > a.count;
      });
    })
  }

}
