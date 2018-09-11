import {Injectable} from "@angular/core";
import {Location} from "@angular/common";

@Injectable()
export class AppLocationService{
  constructor(
    private location: Location
  ){
  }

  generateUrl(){
    let path = this.location.path();
    console.log(path);
    let result = path.split('?');
    let url = '';
    let queryParams = {};
    if(result.length > 1){
      url = result[0];
      let queryParamsTmp: any[] = result[1].split('&');
      queryParamsTmp.filter(item=>{
        if(item.indexOf("=") >=0){
          return true;
        }
      }).map(item=>{
        let result = item.split('=');
        queryParams[result[0]] = result[1];
      });
    }
    console.log(url, queryParams);
    return {url, queryParams}
  }
}
