import { Component } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  login:string;
  password:string;

  constructor(private api:ApiServiceService){}

  onSubmit(){
    this.api.newUser(this.login, this.password).subscribe({
      
    })
  }

  

}
