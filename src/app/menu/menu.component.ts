import { Component, ElementRef } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  constructor(private el: ElementRef) {}

  navigateTo(sectionId: string) {
    const element = this.el.nativeElement.querySelector(`#${sectionId}`);
    
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
