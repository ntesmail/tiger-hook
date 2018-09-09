import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-header-menu',
  templateUrl: './HeaderMenu.component.html'
})
export class HeaderMenuComponent implements OnInit, OnChanges{
  @Input("titles") titles: any[];
  @Output() onSelect: EventEmitter<number> = new EventEmitter<number>();

  constructor(){
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.titles);
  }

  ngOnInit(): void {
  }

  selectItem(item){
    this.onSelect.emit(item.type);
  }

}
