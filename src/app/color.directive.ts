import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  constructor(private eRef: ElementRef) {
    console.log(eRef);
    eRef.nativeElement.style.color = 'blue';
  }

}
