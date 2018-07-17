import { Injectable} from '@angular/core';
import { CanActivate,Router,RouterStateSnapshot,ActivatedRouteSnapshot} from '@angular/router';

@Injectable()
export class AuthGaurdService implements CanActivate{
    public uiSessionId;
    public isLoggedIn:boolean=false;

    constructor(private router: Router){}

    canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean{
        if(window.sessionStorage.sessionId){
            this.uiSessionId=window.sessionStorage.getItem('sessionId');
            if(this.uiSessionId){
                this.isLoggedIn=true;
            }
        }
        return this.isLoggedIn;
    }

}