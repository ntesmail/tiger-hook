import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Location} from "@angular/common";

@Injectable()
export class ApplicationService{
  applications: any[] = [];
  constructor(
    private httpClient: HttpClient,
    private location: Location
  ) {
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

  /**
   * description: 刷新应用列表
   * author: 金炳<hzjinbing@163.com>
   */
  async refreshAppList(){
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
    let allQueryParams = result[1].split('&');
    for(let i = 0 ; i < allQueryParams.length; i++){
      if(allQueryParams[i].split('=')[0] == 'app'){
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

  /**
   * description: 获取当前应用管理这边是在哪个页面
   * author: 金炳<hzjinbing@163.com>
   */
  getCurrentApp(){
    let currentApplication = this.applications.filter(item=>{
      let keys = Object.keys(item.tabs);
      for(let i = 0; i < keys.length; i++){
        if(keys[i]){
          return true;
        }
      }
      return false;
    });
    if(currentApplication.length > 0){
      return currentApplication[0];
    }else{
      return null;
    }
  }

}
