import { Component, ElementRef, Input, ViewChild } from '@angular/core';



@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  @ViewChild('myForm') myForm: ElementRef;
  @ViewChild('nameField') nameField: ElementRef;
  @ViewChild('mailField') mailField: ElementRef;
  @ViewChild('messageField') messageField: ElementRef;

  clickedInputs: boolean[] = [false, false, false];
  showCheckImage: boolean[] = [false, false, false];
  showMissingImage: boolean[] = [false, false, false];
  btnEnabled: boolean = false;
  policyAccept: boolean = false;
  sendingMessage: boolean = false;
  success: boolean = false;



  onInputClick(index: number): void {
    this.clickedInputs.fill(false);
    this.clickedInputs[index] = true;
  }

  onInputBlur(index: number): void {
    this.clickedInputs.fill(false);
  }

  onInputChange(event: Event, index: number): void {
    const target = event.target as HTMLInputElement;
    const value = target.value;

    if (index === 1) {
      this.showCheckImage[index] = value.includes('@');
      this.showMissingImage[index] = !this.showCheckImage[index];
    } else {
      this.showCheckImage[index] = value.trim() !== '';
      this.showMissingImage[index] = value.trim() === '';
    }

    this.enableBtn();
  }

  onInputFocus(index: number): void {
    this.clickedInputs.fill(false);
    this.clickedInputs[index] = true;
  }

  checkImageSource(index: number): string {
    return this.showMissingImage[index] ? 'assets/img/missing.png' : 'assets/img/check.png';
  }

  enableBtn(): void {
    if (this.showCheckImage.every(value => value === true) && this.policyAccept) {
      this.btnEnabled = true;
    } else {
      this.btnEnabled = false;
    }
  }

  checkPolicy() {
    this.policyAccept = !this.policyAccept;
    this.enableBtn();
  }

  async sendMessage() {
    let nameField = this.nameField.nativeElement;
    let mailField = this.mailField.nativeElement;
    let messageField = this.messageField.nativeElement;

    this.sendingMessage = true;
    this.disableFormField(nameField, mailField, messageField);
    await this.submitFormData(nameField, mailField, messageField);
    this.successSent(nameField, mailField, messageField);
  }

  disableFormField(nameField, mailField, messageField) {
    nameField.disabled = true;
    mailField.disabled = true;
    messageField.disabled = true;
  }

  enableFormField(nameField, mailField, messageField) {
    nameField.disabled = false;
    mailField.disabled = false;
    messageField.disabled = false;
  }

  async submitFormData(nameField, mailField, messageField) {
    let fd = new FormData();
    fd.append('name', nameField.value);
    fd.append('mailadress', mailField);
    fd.append('message', messageField.value);

    await fetch('https://matthias-berthold.de/send_mail/send_mail.php',
      {
        method: 'POST',
        body: fd,
        mode: 'no-cors'
      }
    );
  }

  successSent(nameField, mailField, messageField) {
    this.btnEnabled = false;

    setTimeout(() => {
      this.success = true;
      this.sendingMessage = false;
      this.enableFormField(nameField, mailField, messageField);
      this.clearFormFields();
      setTimeout(() => {
        this.success = false;
      }, 5000);
    }, 2000);
  }

  clearFormFields() {
    this.nameField.nativeElement.value = '';
    this.mailField.nativeElement.value = '';
    this.messageField.nativeElement.value = '';
    this.policyAccept = false;

    this.showCheckImage = [false, false, false];
    this.showMissingImage = [false, false, false];
  }
}


