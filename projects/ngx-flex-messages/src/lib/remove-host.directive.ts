import { ElementRef } from '@angular/core';
import { Directive } from '@angular/core';

//remove the host of avatar to be rendered as svg
@Directive({
  selector: '[remove-host]',
})
export class RemoveHostDirective {
  constructor(private el: ElementRef) {}

  //wait for the component to render completely
  ngOnInit() {
    const nativeElement: HTMLElement = this.el.nativeElement;
    const parentElement: HTMLElement | any = nativeElement.parentElement;
    // move all children out of the element
    while (nativeElement.firstChild) {
      parentElement.insertBefore(nativeElement.firstChild, nativeElement);
    }
    // remove the empty element(the host)
    parentElement.removeChild(nativeElement);
  }
}
