import { Component, signal } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';


@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  success_message:string=''

  public sendEmail(e: Event) {
    e.preventDefault();
   
    emailjs
      .sendForm('', '', e.target as HTMLFormElement, {
        publicKey: '',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          this.success_message='Your messsage has successfully sent.';
        },
        (error) => {
          this.success_message='please reach out to admin for more information';
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
        },
      );
  }

}
