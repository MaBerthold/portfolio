import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-arrow-slider',
  templateUrl: './arrow-slider.component.html',
  styleUrl: './arrow-slider.component.scss'
})
export class ArrowSliderComponent  {
  inViewport = true;

  images = [
    'assets/img/arrow-left1.png',
    'assets/img/arrow-left2.png',
    'assets/img/arrow-left3.png'
  ];


  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event): void {
    this.checkIfInViewport();
  }

  checkIfInViewport(): void {
    const element = document.querySelector('.image-container');
  
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
