import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  menuOpen = false;

  constructor(private router: Router) {}


  openMenu() {
    this.menuOpen = !this.menuOpen;
    (this.menuOpen) ? this.router.navigate(['/menu']) : this.router.navigate(['/']);
  }  

  toggleMenuBtn() {
    if(this.menuOpen) {
      this.menuOpen = false;
    }
  }
}
