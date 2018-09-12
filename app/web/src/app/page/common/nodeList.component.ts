import {Component} from "@angular/core";

@Component({
  selector: 'app-node-list',
  templateUrl: './nodeList.component.html',
  styles: [`
    .m-node {
      float: left;
      width: 200px;
      height: 200px;
      border: 1px solid #ccc;
      padding: 10px;
    }
    ul {
      list-style: none;
      padding: 0;
    }
  `]
})
export class NodeListComponent {

}
