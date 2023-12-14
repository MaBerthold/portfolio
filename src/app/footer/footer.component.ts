import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  clickedInputs: boolean[] = [false, false, false];
  showCheckImage: boolean[] = [false, false, false];
  showMissingImage: boolean[] = [true, true, true];
  btnEnabled: boolean = true; 


  onInputClick(index: number): void {
    this.clickedInputs.fill(false);
    this.clickedInputs[index] = true;
  }

  onInputBlur(index: number): void {  
    this.clickedInputs.fill(false);
  }

  onInputChange(event: Event, index: number): void  {
    const target = event.target as HTMLInputElement;
    const value = target.value;
    if (index === 1) { 
      this.showCheckImage[index] = value.includes('@');
      this.showMissingImage[index] = !this.showCheckImage[index];
    } else {
      this.showCheckImage[index] = value.trim() !== '';
      this.showMissingImage[index] = value.trim() === '';
    }
  }

  onInputFocus(index: number): void {
    this.clickedInputs.fill(false);
    this.clickedInputs[index] = true;
  }

  checkImageSource(index: number): string {
    return this.showMissingImage[index] ? 'assets/img/missing.png' : 'assets/img/check.png';
  }

  enableBtn(): void {
    this.btnEnabled = true;
  }

  disableBtn(): void {
    this.btnEnabled = false;
  }

  sendMessage() {
    
  }
}
