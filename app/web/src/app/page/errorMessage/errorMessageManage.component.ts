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
    this.httpClient.get("/xhr/application/getErrorMessage.do", {}).subscribe((data: any)=>{
      this.errorMessages = data.data.map((item: string)=>{
        let errorMessage = JSON.parse(item);
        let md5 = Object.keys(errorMessage)[0];

        let content = errorMessage[md5];
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
