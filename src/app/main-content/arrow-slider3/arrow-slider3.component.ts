import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-arrow-slider3',
  templateUrl: './arrow-slider3.component.html',
  styleUrl: './arrow-slider3.component.scss'
})
export class ArrowSlider3Component  {
  inViewport = true;

  
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event): void {
    this.checkIfInViewport();
  }

  checkIfInViewport(): void {
    const element = document.querySelector('.image-div3');
  
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
