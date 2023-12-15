import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-above-the-fold',
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss'
})
export class AboveTheFoldComponent implements OnInit{
  animation: boolean = true;
  
  ngOnInit(): void {
    this.repeatAnimation();
  }

  repeatAnimation() {
    setInterval(() => {
      this.animation = true;
      setTimeout(() => {
        this.animation = false;
       },1200);
    }, 1400);
  }
}
