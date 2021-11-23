import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SideNavOuterToolbarModule, SideNavInnerToolbarModule, SingleCardModule } from './layouts';
import { FooterModule, ResetPasswordFormModule, CreateAccountFormModule, ChangePasswordFormModule, LoginFormModule } from './shared/components';
import { AuthService, ScreenService, AppInfoService } from './shared/services';
import { UnauthenticatedContentModule } from './unauthenticated-content';
import { AppRoutingModule } from './app-routing.module';
import { DeliverablesModule } from './pages/deliverables/deliverables.module';
import { ExplodedModule } from './pages/exploded/exploded.module';
import { SpfModule } from './pages/spf/spf.module';
import { MapModule } from './pages/map/map.module';
import { TrafficManagerModule } from './pages/traffic-manager/traffic-manager.module';
import { SharedModule } from './shared/shared.module';
import { IconsModule } from './icons/icons.module';
import { AdminModule } from './pages/admin/admin.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SideNavOuterToolbarModule,
    SideNavInnerToolbarModule,
    SingleCardModule,
    FooterModule,
    ResetPasswordFormModule,
    CreateAccountFormModule,
    ChangePasswordFormModule,
    LoginFormModule,
    UnauthenticatedContentModule,
    AppRoutingModule,
    DeliverablesModule,
    ExplodedModule,
    SpfModule,
    MapModule,
    TrafficManagerModule,
    SharedModule,
    IconsModule,
    AdminModule
  ],
  providers: [AuthService, ScreenService, AppInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
