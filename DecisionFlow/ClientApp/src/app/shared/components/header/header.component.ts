import { Component, NgModule, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';

import { AuthService, IUser } from '../../services';
import { UserPanelModule } from '../user-panel/user-panel.component';
import { DxButtonModule } from 'devextreme-angular/ui/button';
import { DxToolbarModule } from 'devextreme-angular/ui/toolbar';
import { IconsModule } from 'src/app/icons/icons.module';
import { Router, NavigationEnd } from '@angular/router';
import { AuthorizeService } from 'src/api-authorization/authorize.service';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  @Output()
  menuToggle = new EventEmitter<boolean>();
  path: string;
  isHidden = true;
  public isAuthenticated!: Observable<boolean>;
  public userName!: Observable<string | any>;
  
  @Input()
  menuToggleEnabled = false;

  @Input()
  title!: string;

  user: IUser | null = { email: '' };

  userMenuItems = [{
    text: 'Profile',
    icon: 'user',
    onClick: async () => {
      // '["/authentication/profile"]'
      this.router.navigate(["/authentication/profile"]);
    }
  },
  {
    text: 'Logout',
    icon: 'runner',
    onClick: async () => {
   
      // '["/authentication/profile"]'
      this.router.navigate(["/authentication/logout"]);
    }
  }];

  constructor(private authService: AuthService, private router: Router, private location: Location, private authorizeService: AuthorizeService) {
    this.path = this.location.path().charAt(1).toUpperCase() + this.location.path().slice(2);
      router.events.subscribe((val) => {
        if(val instanceof NavigationEnd){
          this.path = this.location.path().charAt(1).toUpperCase() + this.location.path().slice(2);
          if(this.path == "Exploded"){
            this.path = "Exploded View"
          } 
          if(this.path == "Spf"){
            this.path = "Single Part Flow"
          }
          if(this.path == "Map"){
            this.path = "Manufacturing Action Plan"
          }
          if(this.path == "Trafficmanager"){
            this.path = "Traffic Manager"
          }
          if(this.path.includes("callback")){
            this.path = "loading"
            this.router.navigate(["/home"]);
          }
          if(
            this.path == "Overview" ||
            this.path == "Inventory" ||
            this.path == "Performance" ||
            this.path == "Charts"
            ) {
              this.isHidden = false;
            } else {
              this.isHidden = true;
            }
          console.log(this.path)
        }
      });
   }

  ngOnInit() {
    this.authService.getUser().then((e) => this.user = e.data);
    this.isAuthenticated = this.authorizeService.isAuthenticated();
    this.userName = this.authorizeService.getUser().pipe(map(u => u && u.name));
  }

  toggleMenu = () => {
    this.menuToggle.emit();
  }

  crumbClick($event: any){
    let path = $event.path[0].outerText
    path = path.charAt(0).toLowerCase() + path.slice(1);
    if(path != 'deliverables'){
      this.router.navigate(['/' + path])
    } else {
      this.router.navigate(['/overview'])
      console.log(true, path)
    }
  }

  ngOnDestroy(){

  }
}

@NgModule({
  imports: [
    CommonModule,
    DxButtonModule,
    UserPanelModule,
    DxToolbarModule,
    IconsModule
  ],
  declarations: [ HeaderComponent ],
  exports: [ HeaderComponent ]
})
export class HeaderModule { }
