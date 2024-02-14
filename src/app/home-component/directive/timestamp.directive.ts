import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appTimestamp]',
  standalone: true,
})
export class TimestampDirective {
  @Input('appTimestamp') timestamp: number = 0;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    const date = new Date(this.timestamp);
    this.el.nativeElement.value = date.toISOString().split('T')[0];
  }
}
