import {Component, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Component({
  templateUrl: './errorMessageManage.component.html'
})
export class ErrorMessageManageComponent implements OnInit{
  errorMessages: any[] = []
  constructor(private httpClient: HttpClient){
  }

  ngOnInit(): void {
    this.httpClient.get("/xhr/application/getErrorMessage.do", {}).subscribe((data: any)=> {
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
