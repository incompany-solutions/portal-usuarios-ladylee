import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private cookieService: CookieService) { }

  private invalidLoginSubject = new Subject();

  get isLoogedIn(): boolean {
    let token = this.cookieService.get('access_token')
    return token ? true : false;
  }

  get userEmail(): string {
    return this.cookieService.get('user_email');

  }

  get userToken(): string {
    return this.cookieService.get('access_token');
  }

  getInvalidLogin(): Observable<any> {
    return this.invalidLoginSubject.asObservable();
  }

  login(data: any) {

    this.http.post<TokenResponse>(environment.urls.token, {})
      .subscribe(token => {

        let httpOptions = {
          headers: new HttpHeaders({ 'Authorization': 'Bearer ' + token.access_token })
        };
        this.http.post<any>(environment.urls.login, {
          email: data.identity,
          contrasena: data.password
        }, httpOptions)
          .subscribe(response => {
            if (response.status == 'Ok') {
              this.cookieService.set('access_token', token.access_token, { expires: 1 });
              this.cookieService.set('user_email', data.identity, { expires: 1 });
              this.router.navigate(['/leads']);
            }
            else {
              this.invalidLoginSubject.next();
            }
          });
      });
  }

  logout() {
    this.cookieService.delete('access_token');
    this.cookieService.delete('user_email');
    this.router.navigate(['login']);
  }
}


export class TokenResponse {
  access_token: string;
  instance_url: string;
  id: string;
  token_type: string;
  issued_at: string;
  signature: string;

}
