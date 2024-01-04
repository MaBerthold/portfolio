import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  showDescriptionLeft: boolean = false;
  showDescriptionRight: boolean = false;

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    this.checkVisibility();
  }

  checkVisibility() {
    this.checkVisibilityForProject('.project-div.left-visible', 'showDescriptionLeft');
    this.checkVisibilityForProject('.project-div.right-visible', 'showDescriptionRight');
  }

  checkVisibilityForProject(selector: string, propertyName: string) {
    const element = document.querySelector(selector);
    if (element) {
      const boundingClientRect = element.getBoundingClientRect();
      const isVisible = boundingClientRect.top >= 0 && boundingClientRect.bottom <= window.innerHeight * 0.8;
      if (isVisible) {
        this[propertyName] = true;
      }    }
  }
}
