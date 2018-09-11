import {Component, OnInit} from "@angular/core";
import {Location} from "@angular/common";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-application-manage',
  templateUrl: './ApplicationManage.component.html'
})
export class ApplicationManageComponent implements OnInit{
  applications: any[] = [];

  constructor(
    private location: Location,
    private router: Router,
    private httpClient: HttpClient
  ){
  }

  /**
   * description: 获取应用列表
   * author: 金炳<hzjinbing@163.com>
   */
  async getApplicationList(): Promise<any>{
    return new Promise((resolve, reject)=>{
      this.httpClient.get("/xhr/application/getAppList.do").subscribe((data: any)=>{
        resolve(data.data);
        console.log(data);
      })
    })
  }

  async initSideNav(){
    let applications: any[] = await this.getApplicationList();
    this.applications = applications.map(item=>{
      return {
        name: item,
        open: true,
        tabs: {
          dashboard: false,
          alertManage: false,
          logAnalyze: false,
          appStructure: false,
          errorMessage: false,
          appStatus: false,
          traceManage: false,
          remoteDebug: false
        }
      }
    });
    let result = this.location.path().split("?");
    if(result.length < 2){
      return;
    }
    let paths = this.location.path().split("?")[0].split("/");
    console.log(paths);
    let allQueryParams = result[1].split('&');
    for(let i = 0 ; i < allQueryParams.length; i++){
      if(allQueryParams[i].split('=')[0] == 'app'){
        console.log(allQueryParams[i].split('=')[1]);
        let application = this.applications.filter(application=>{
          if(application.name == allQueryParams[i].split('=')[1]){
            return true;
          }
        });
        if(application.length > 0){
          application[0].tabs[paths[2]] = true;
          break;
        }
      }
    }
  }

  ngOnInit(): void {
    this.initSideNav();
  }

  goPath(item, path){
    let params = {
      app: item.name
    }
    let queryPath = '';
    Object.keys(params).map(item=>{
      if(queryPath.length > 0){
        queryPath += '&' + item + "=" + params[item];
      }else{
        queryPath += item + "=" + params[item];
      }
    });
    this.location.go('/application/' + path, queryPath);
  }
}
