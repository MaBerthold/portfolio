import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-arrow-slider2',
  templateUrl: './arrow-slider2.component.html',
  styleUrl: './arrow-slider2.component.scss'
})
export class ArrowSlider2Component  {
  inViewport = true;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event): void {
    this.checkIfInViewport();
  }

  checkIfInViewport(): void {
    const element = document.querySelector('.image-div2');
  
    if (element) {
      const rect = element.getBoundingClientRect();
      this.inViewport = (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  }
}
