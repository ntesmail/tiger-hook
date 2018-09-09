import {Component, Input, OnChanges, SimpleChanges} from "@angular/core";
import * as $ from 'jquery';

@Component({
  selector: 'app-side-nav',
  templateUrl: './SideMenu.component.html'
})
export class SideMenuComponent implements OnChanges{
  @Input() menuType: number;

  constructor(){

  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes["menuType"]){
      if(changes["menuType"].previousValue == 1 || changes["menuType"].previousValue == 2){
        // 由于部分结构是把对应的节点删除了，所以此处需要把对应的remove掉。
        $("app-side-nav ul").remove();
      }
    }
  }
}
