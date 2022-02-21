import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Observable } from 'rxjs';
import { tap } from "rxjs/operators";
import { environment } from '../../environments/environment';
import { AuthService } from '../services/auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {
    constructor(private router: Router, private injector: Injector, private authService: AuthService) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (req.url != environment.urls.token) {
            let header = req.headers;
            if (this.authService.isLoogedIn) {
                header = header.set("Authorization", "Bearer " + this.authService.userToken);
                header = header.set("Access-Control-Allow-Origin", "*");
            }
            req = req.clone({ headers: header });
        }

        return next.handle(req).pipe(tap((event: HttpEvent<any>) => {
        }, (err: any) => {
            if (err instanceof HttpErrorResponse) {

                if (err.status === 401 || err.status === 403) {
                    this.authService.logout();
                }
            }
        }));
    }
}
