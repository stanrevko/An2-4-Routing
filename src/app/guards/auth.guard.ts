import { Injectable }  from '@angular/core';
import {   
    CanActivate, 
    CanActivateChild,
    Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
}                      from '@angular/router';
import { AuthService } from './../services/auth.service';


@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild  {
  constructor(
    private authService: AuthService, 
    private router: Router
  ) {}

  private checkLogin(url: string): boolean {          
    if (this.authService.isLoggedIn) { 
        return true; 
    }

    // Store the attempted URL for redirecting
    this.authService.redirectUrl = url;

    // Navigate to the login page
    this.router.navigate(['/login']);
    return false;
  }

  //implemetation of CanActivate
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log('CanActivateGuard is called');
    const url: string = state.url;
    return this.checkLogin(url);    
  }

  //implemetation of CanActivateChild 
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log('canActivateChild Guard is called');
    return this.canActivate(route, state);
  }



}
