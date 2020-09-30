import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {AuthService} from "../Auth/Auth.Service";

@Injectable()
export class EstaLoguedoGuard implements CanActivate {

  constructor(
    public readonly _authService: AuthService
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this._authService.estaAutenticado) {
      return true;
    } else {
      return false;
    }

  }

}
