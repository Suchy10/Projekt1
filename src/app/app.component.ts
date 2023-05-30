import { Component } from '@angular/core';
import { LoginGuard } from './guards/login-guard.guard';
import { Router } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MatMenuListItem } from './app.module';
import { ApiServiceService } from './services/api-service.service';
import { infoUser } from './interfaces/interfejsy';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  iloscPrzepisUzyt:number;

constructor(private route:Router,private api:ApiServiceService ,public authService:LoginGuard){
  let user:infoUser = JSON.parse(sessionStorage.getItem('user'))
  this.iloscPrzepisUzyt = user.iloscPrzepis
}

  title = 'Projekt1';
  menuListItems : MatMenuListItem[];

  Wyloguj(){
    this.authService.logout();
    window.location.reload();
  }

  iloscPrzepisow(){
    
  }

  public showNavBar = true;

toggleNavBar(component) {
   if(component instanceof LoginComponent || component instanceof RegisterComponent) {
      this.showNavBar = false;
   } else {
      this.showNavBar = true;
   }
}
 }
