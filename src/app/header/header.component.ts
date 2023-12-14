import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  menuOpen = false;

  openMenu() {
    this.animationBurgerMenu();
    console.log(this.menuOpen); 
  }

  animationBurgerMenu() {
    this.menuOpen = !this.menuOpen;
  }

}
