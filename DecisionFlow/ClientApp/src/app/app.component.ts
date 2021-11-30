import { Component, HostBinding } from '@angular/core';
import { AuthService, ScreenService, AppInfoService } from './shared/services';
import { AuthorizeService } from 'src/api-authorization/authorize.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  authenticated!: boolean;
  @HostBinding('class') get getClass() {
    return Object.keys(this.screen.sizes).filter(cl => this.screen.sizes[cl]).join(' ');
  }

  constructor(private authService: AuthService, private screen: ScreenService, public appInfo: AppInfoService, private authorize: AuthorizeService) { 
    this.authorize.isAuthenticated()
    .subscribe((data) => {
      this.authenticated = data
      console.log(this.authenticated)
    })
  }

  isAuthenticated() {
    return this.authService.loggedIn;
  }
}
