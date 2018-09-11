import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {Location} from "@angular/common";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {ApplicationService} from "../../common/Application.service";

@Component({
  selector: 'app-application-side-nav',
  templateUrl: './ApplicationSideNav.component.html'
})
export class ApplicationSideComponent implements OnInit{
  applications: any[] = [];
  @Input() app: String;
  @Output() appChange: EventEmitter<String> = new EventEmitter<String>();

  constructor(
    private location: Location,
    private router: Router,
    private httpClient: HttpClient,
    private applicationService: ApplicationService
  ){
    this.applications = this.applicationService.applications;
  }

  async initApplicationData(){
    await this.applicationService.refreshAppList();
    this.applications = this.applicationService.applications;
  }

  ngOnInit(): void {
    this.initApplicationData();
  }

  goPath(item, path){
    let params = {
      app: item.name
    };
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
