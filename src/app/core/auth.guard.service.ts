/**
 * Created by smirnoff on 20.07.18.
 */
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {
    ActivatedRouteSnapshot,
    CanActivate,
    CanLoad,
    Route,
    RouterStateSnapshot
} from '@angular/router';


@Injectable()

export class AuthGuard implements CanActivate, CanLoad {

    constructor() {}

    canLoad(route: Route): Observable<boolean> | boolean {
        return true;
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return true
    };

}