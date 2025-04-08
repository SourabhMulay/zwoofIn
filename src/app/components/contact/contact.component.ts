import { Component, signal } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { environment } from '../../../../environment';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-contact',
  imports: [FooterComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  success_message:string=''

  public sendEmail(e: Event) {
    e.preventDefault();
   
    emailjs
      .sendForm(environment.service_id, environment.template_id, e.target as HTMLFormElement, {
        publicKey: environment.apiKey,
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
