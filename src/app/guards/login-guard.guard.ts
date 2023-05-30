import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import{Injectable} from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs';
import { infoUser } from '../interfaces/interfejsy';


@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  user:string
  constructor(private router:Router){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree{
    let user:infoUser = JSON.parse(sessionStorage.getItem('user'))
    console.log(user)
    if(user == undefined || user.idusers_game == undefined){
      this.router.navigateByUrl('/login')
      return false;
    }else{
      console.log(sessionStorage)
      return true;
  }
}
logout(){
  sessionStorage.clear()
  this.router.navigateByUrl('/login')
  console.log(sessionStorage)
}
}
