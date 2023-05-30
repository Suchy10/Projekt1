import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { infoUser } from 'src/app/interfaces/interfejsy';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login1:string;
  password1:string;
  user:infoUser
  showError: boolean = false;
  constructor(private api:ApiServiceService ,private router:Router){
    
  }
  onSubmit(){
    this.api.loginUser(this.login1, this.password1).subscribe({
      next:(response)=>{
        this.showError =true;
        this.user = response as infoUser;
        console.log(this.user);
        sessionStorage.setItem('user', JSON.stringify(this.user));
        this.router.navigate([''])
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }
  

  regis(){
    this.router.navigate(['/register'])
  }

}
