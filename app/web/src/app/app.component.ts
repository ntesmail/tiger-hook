import {Component} from '@angular/core';
import {Location} from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
  .logo {
    width: 120px;
    height: 31px;
    color: #ccc;
    float: left;
    font-size: 16px;
  }
  `]
})
export class AppComponent{
  menuType: number = 1;
  titles: any[] = [{
    title: '应用桶管理',
    type: 1
  }, {
    title: '应用管理',
    type: 2,
  }, {
    title: '节点管理',
    type: 3
  }, {
    title: '权限管理',
    type: 4
  }];

  constructor(private location: Location){
    let headerMenu = this.location.path().split("/")[1];
    switch(headerMenu){
      case "application":
        this.titles[1].selected = true;
        this.menuType = 2;
        break;
      case "node":
        this.titles[2].selected = true;
        this.menuType = 3;
        break;
      case "permission":
        this.titles[3].selected = true;
        this.menuType = 4;
        break;
    }
  }

  /**
   * description: 选择对应的大菜单
   * author: 金炳<hzjinbing@163.com>
   */
  selectHeaderMenu(headerMenuType){
    console.log(`select menu: ${headerMenuType}`);
    this.menuType = headerMenuType
  }
}
