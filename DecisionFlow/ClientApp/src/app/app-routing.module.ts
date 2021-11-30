import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent, ResetPasswordFormComponent, CreateAccountFormComponent, ChangePasswordFormComponent } from './shared/components';
import { AuthGuardService } from './shared/services';
//devextreme template ^ no logic
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { DxDataGridModule, DxFormModule } from 'devextreme-angular';
import { OverviewComponent } from './pages/deliverables/overview/overview.component';
import { ExplodedComponent } from './pages/exploded/exploded.component';
import { InventoryComponent } from './pages/deliverables/inventory/inventory.component';
import { PerformanceComponent } from './pages/deliverables/performance/performance.component';
import { ChartsComponent } from './pages/deliverables/charts/charts.component';
import { SpfComponent } from './pages/spf/spf.component';
import { MapComponent } from './pages/map/map.component';
import { TrafficManagerComponent } from './pages/traffic-manager/traffic-manager.component';
import { IconsModule } from './icons/icons.module';
import { DxTabsModule, DxSelectBoxModule, DxButtonModule, DxFileUploaderModule, DxTextBoxModule, DxTemplateModule, DxDropDownBoxModule, DxListModule} from 'devextreme-angular';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './pages/admin/admin.component';
import { ApplicationPaths } from 'src/api-authorization/api-authorization.constants';
import { LoginComponent } from 'src/api-authorization/login/login.component';
import { LogoutComponent } from 'src/api-authorization/logout/logout.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { AuthorizeGuard } from 'src/api-authorization/authorize.guard';
// Identity Template ^
import { FetchTestComponent } from './fetch-test/fetch-test.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthorizeInterceptor } from 'src/api-authorization/authorize.interceptor';

const routes: Routes = [
  { path: ApplicationPaths.Register, component: LoginComponent },
  { path: ApplicationPaths.Profile, component: LoginComponent },
  { path: ApplicationPaths.Login, component: LoginComponent },
  { path: ApplicationPaths.LoginFailed, component: LoginComponent },
  { path: ApplicationPaths.LoginCallback, component: LoginComponent },
  { path: ApplicationPaths.LogOut, component: LogoutComponent },
  { path: ApplicationPaths.LoggedOut, component: LogoutComponent },
  { path: ApplicationPaths.LogOutCallback, component: LogoutComponent },
  { path: 'fetch-data', component: FetchTestComponent, canActivate: [AuthorizeGuard] },
  { path: 'weatherforecast', component: FetchTestComponent, canActivate: [AuthorizeGuard]   },
  {
    path: 'overview',
    component: OverviewComponent,
    canActivate: [ AuthorizeGuard ]
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [ AuthorizeGuard ]
  },
  {
    path: 'map',
    component: MapComponent,
    canActivate: [ AuthorizeGuard ]
  },
  {
    path: 'trafficmanager',
    component: TrafficManagerComponent,
    canActivate: [ AuthorizeGuard ]
  },
  {
    path: 'inventory',
    component: InventoryComponent,
    canActivate: [ AuthorizeGuard ]
  },
  {
    path: 'spf',
    component: SpfComponent,
    canActivate: [ AuthorizeGuard ]
  },
  {
    path: 'performance',
    component: PerformanceComponent,
    canActivate: [ AuthorizeGuard ]
  },
  {
    path: 'charts',
    component: ChartsComponent,
    canActivate: [ AuthorizeGuard ]
  },
  {
    path: 'exploded',
    component: ExplodedComponent,
    canActivate: [ AuthorizeGuard ]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [ AuthorizeGuard ]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthorizeGuard] 
  },
  {
    path: 'login-form',
    component: LoginFormComponent,
    canActivate: [ AuthorizeGuard ]
  },
  {
    path: 'reset-password',
    component: ResetPasswordFormComponent,
    canActivate: [ AuthorizeGuard ]
  },
  {
    path: 'create-account',
    component: CreateAccountFormComponent,
    canActivate: [ AuthorizeGuard ]
  },
  {
    path: 'change-password/:recoveryCode',
    component: ChangePasswordFormComponent,
    canActivate: [ AuthorizeGuard ]
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), 
    DxDataGridModule, 
    DxFormModule, 
    IconsModule, 
    DxTabsModule, 
    DxSelectBoxModule,
    DxButtonModule,
    CommonModule,
    DxFileUploaderModule,
    DxTextBoxModule,
    DxTemplateModule,
    DxDropDownBoxModule, 
    DxListModule
  ],
  providers: [AuthGuardService,  { provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true }],
  exports: [RouterModule],
  declarations: [HomeComponent, ProfileComponent, FetchDataComponent]
})
export class AppRoutingModule { }
