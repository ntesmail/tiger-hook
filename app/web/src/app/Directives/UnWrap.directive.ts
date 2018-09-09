import {AfterViewInit, Directive, ElementRef} from "@angular/core";
import * as $ from 'jquery';

@Directive({
  selector: '[app-unwrap]'
})
export class UnWrapDirective implements AfterViewInit{
  constructor(private elementRef: ElementRef){

  }

  ngAfterViewInit(): void {
    let nativeElement: HTMLElement = this.elementRef.nativeElement;
    $(nativeElement).removeAttr("app-unwrap").unwrap();
  }
}
