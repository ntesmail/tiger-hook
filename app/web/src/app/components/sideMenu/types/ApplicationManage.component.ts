import {Component, OnInit} from "@angular/core";
import {Location} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-application-manage',
  templateUrl: './ApplicationManage.component.html'
})
export class ApplicationManageComponent implements OnInit{
  applications: any[] = [
    {
      name: 'tiger-ape',
      icon: 'user',
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
    },{
      name: 'shark-wiki',
      icon: 'laptop',
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
    },{
      name: 'shark-icac',
      icon: 'notification',
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
  ];

  constructor(
    private location: Location,
    private router: Router
  ){
  }

  initSideNav(){
    let result = this.location.path().split("?");
    if(result.length < 2){
      return;
    }
    let paths = this.location.path().split("?")[0].split("/");
    let allQueryParams = result[1].split('&');
    for(let i = 0 ; i < allQueryParams.length; i++){
      if(allQueryParams[i].split('=')[0] == 'app'){
        console.log(allQueryParams[i].split('=')[1]);
        let application = this.applications.filter(application=>{
          if(application.name == allQueryParams[i].split('=')[1]){
            return true;
          }
        });
        application[0].tabs[paths[2]] = true;
        break;
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
