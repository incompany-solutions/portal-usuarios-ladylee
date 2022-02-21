import { Component, OnDestroy } from '@angular/core';
import validator from 'validator';
import { AuthService } from '../../services/auth.service';
import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';

interface User {
  identity: string;
  password: string;
}
interface ValidatorErrors {
  identity?: string;
  password?: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnDestroy {

  user: User = {
    identity: 'sebahattinkumpinar@gmail.com',
    password: '12134sd',
  };

  validIdentity = true;
  validPassword = true;
  errors: ValidatorErrors = {};
  logining: boolean = false;

  invalidLoginSubscription: Subscription;

  constructor(private authService: AuthService, private messageService: MessageService) {

    this.invalidLoginSubscription = this.authService.getInvalidLogin().subscribe(() => {
      this.logining = false;
      this.messageService.add({ severity: 'error', summary: 'Wrong username or password' })
    })

  }

  private validateForm = (user: User): ValidatorErrors => {
    validator.isLength(user.identity, { min: 6 })
      ? ((this.validIdentity = true), (this.errors.identity = null))
      : ((this.validIdentity = false), (this.errors.identity = 'Email or Username or Phone is required'));
    validator.isLength(user.password, { min: 3 })
      ? ((this.validPassword = true), (this.errors.password = null))
      : ((this.validPassword = false), (this.errors.password = 'Password minimum length is 3 characters'));

    return this.errors;
  };

  submit = () => {
    this.logining = true;
    let errors = this.validateForm(this.user);
    if (errors.identity || errors.password) {
      this.messageService.clear();
      Object.keys(errors).map((e) => {
        if (errors[e]) this.messageService.add({ severity: 'error', summary: e, detail: errors[e] });
      });
    } else {
      this.authService.login(this.user);
    }
  };

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.invalidLoginSubscription.unsubscribe();
  }
}
