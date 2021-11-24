import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent, ResetPasswordFormComponent, CreateAccountFormComponent, ChangePasswordFormComponent } from './shared/components';
import { AuthGuardService } from './shared/services';
//devextreme template ^ no logic
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { TasksComponent } from './pages/tasks/tasks.component';
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
    path: 'tasks',
    component: TasksComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'overview',
    component: OverviewComponent,
    canActivate: [ AuthorizeGuard ]
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'map',
    component: MapComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'trafficmanager',
    component: TrafficManagerComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'inventory',
    component: InventoryComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'spf',
    component: SpfComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'performance',
    component: PerformanceComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'charts',
    component: ChartsComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'exploded',
    component: ExplodedComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'login-form',
    component: LoginFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'reset-password',
    component: ResetPasswordFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'create-account',
    component: CreateAccountFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'change-password/:recoveryCode',
    component: ChangePasswordFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: '**',
    redirectTo: '/'
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
  declarations: [HomeComponent, ProfileComponent, TasksComponent, FetchDataComponent]
})
export class AppRoutingModule { }
